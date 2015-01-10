$(function() {
	var $input = $('#search'),
		TIME_DEBOUNCE = 100,
		MIN_QUERY = 2;

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

	$input.bind('keyup', debounce(function() {
		var $this = $(this),
			query = $this.val();

		if ( query < 2 ) return;

		var results = _searchIndex.search(query);
		console.warn(results);
	}));

});
