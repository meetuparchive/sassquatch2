Ssassquatch 2
=============

## (in dev)

Sassquatch is a CSS foundation and framework for [Meetup](http://www.meetup.com), built with [Sass](http://sass-lang.com/).

---

## Source overview

File or [Directory]        | Description
---------------------------| --------------------------------------------------------------------------
`base.scss`                | Main Sass file; includes all partials
`_globals.scss`            | Defines all global variables
`_util.scss`               | Includees all helper partials ("silent", non-ouputting scss)
[`util/`]                  | Contains helper paritals organized by function (ie. `_breakpoints.scss`)
[`util/functions/`]        | Contains only sass function partials, organized by function (ie. `_stringUtils.scss`)
[`core/`]                  | Contains core low level styling partials (ie. `_layout.scss`, `_tables.scss`, etc)
[`components/`]            | Contains UI component partials (ie. `_tabView.scss`)

#### TODO
1. Set up hologram grunt task
2. pull `core/` partials from foundation scratch
3. holodoc foundation scratch
4. rm dist dir and compiled CSS
	- compile sass directly to hologram docs
	- enable CSS compile as a separate grunt task as an option
3. set up contribution guidelines
  - mv sassquatch 1 PCV convention wiki page
  - http://editorconfig.org/#download
  - http://codeguide.co/#css
