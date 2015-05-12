Sassquatch 2
=============

## (in dev)

Sassquatch is a CSS foundation and framework for [Meetup](http://www.meetup.com), built with [Sass](http://sass-lang.com/).

---

## Documentation
Documentation is built to [github pages](http://meetup.github.io/sassquatch2/typography.html)

An overview of basic Sassquatch2 conventions is also available in [the wiki](https://github.com/meetup/sassquatch2/wiki)

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

We use the [Gitflow branching model](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for development:

- `develop` - default branch for active development (all PRs diff against `develop`)
- release branches - cut from `develop`, get merged into `master`
- `master` - only release branches and hotfixes get committed to master
- master branch in theory should always contain the latest __stable__ release

### Grunt tasks

Command             | Result
------------------- | -----------------------------
`grunt`             | By default, grunt recompiles Sass and rebuilds Hologram docs
`grunt sass`        | Recompiles Sass
`grunt hologram`    | Rebuilds Hologram docs
`grunt clean`       | Cleans compiled docs and CSS in `docs/build`
