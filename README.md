Ssassquatch 2
=============

## (in dev)

Sassquatch is a CSS foundation and framework for [Meetup](http://www.meetup.com), built with [Sass](http://sass-lang.com/).

---

## Source plan

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
1. pull `master` branch into the foundation-scratch repo via bower
2. refactor, refactor, refactor
