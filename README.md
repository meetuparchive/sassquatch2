Ssassquatch 2
=============

## (in dev)

Sassquatch is a CSS foundation and framework for [Meetup](http://www.meetup.com), built with [Sass](http://sass-lang.com/).

---

## Documentation
Documentation is built to [github pages](http://meetup.github.io/sassquatch2/core.html)

---

## Installation
Manage installation via bower:

```json
"dependencies": {
  "sassquatch2": "git@github.com:meetup/sassquatch2.git#master",
  ...
  }
```

---

## Development

Clone this repo and run `./setup.sh`. 

Code guidelines and standards are [documented on the wiki](https://github.com/meetup/sassquatch2/wiki/Code-standards-&-guidelines)

We use the [Gitflow branching model](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for development. _Feature branches merge to the default branch, `develop`, releases are merged into `master`. The `master` branch should contain the latest stable release and/or hotfix)_

### Grunt tasks

Command             | Result
------------------- | -----------------------------
`grunt`             | By default, grunt recompiles Sass and rebuilds Hologram docs
`grunt sass`        | Recompiles Sass
`grunt hologram`    | Rebuilds Hologram docs
`grunt clean`       | Cleans compiled docs and CSS in `docs/build`
`grunt ghpages`     | Pushes a clean rebuild of `docs/build` from your __current branch__ to `gh-pages`
