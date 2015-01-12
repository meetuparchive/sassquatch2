$(function() {
	// yes, this is hacky, but it works for now
	var $input = $('#search'),
		TIME_DEBOUNCE = 100,
		MIN_QUERY = 2,
		resultTemplate = [
			'<li>',
				'<a href="__URL__">',
					'<h2>__TITLE__</h2>',
					'<p class="text--caption">__NAME__</p>',
					'<p class="text--hint text--small">__CRUMBS__</p>',
				'</a>',
			'</li>'
		].join("");

	var debounce = function ( fn ) {
		var timeout;
		return function () {
			var args = Array.prototype.slice.call(arguments),
				self = this;

			clearTimeout(timeout);
			timeout = setTimeout(function() {
				fn.apply(self, args)
			}, TIME_DEBOUNCE);
		};
	};

	var renderTempl = function( o ) {
		console.warn(o);
		return resultTemplate
			.replace(/__URL__/, o.path)
			.replace(/__TITLE__/, o.title)
			.replace(/__NAME__/, o.name)
			.replace(/__CRUMBS__/, o.breadcrumb);
	};

	$input.bind('keyup', debounce(function() {
		var $this = $(this),
			query = $this.val();

		if ( query < 2 ) return;

		var results = _searchIndex.search(query);
		console.warn(results);

		$.each(results, function(i, v) {
			console.warn( renderTempl(v) );
		});
	}));

});
