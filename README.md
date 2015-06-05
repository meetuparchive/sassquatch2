Sassquatch 2
=============

Sassquatch is a CSS foundation and framework for [Meetup](http://www.meetup.com), built with [Sass](http://sass-lang.com/).

---

## Documentation
Hologram documentation is built to [github pages](http://meetup.github.io/sassquatch2/typography.html)

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


### Creating a release
Until I write the script for creating a release, this is the process:

1. merge changes from `develop` into `master`
2. increment the version number in `bower.json`
3. commit the result & push
4. `git tag -a vX.X.X -m "tag message"`
5. git push origin vX.X.X

Once the tag ref is pushed to origin the version is available to install in
chapstick or elsewhere.


### Building to `gh-pages`
As of 6/3/2014, building to `gh-pages` is still a manual process until
we get around to setting up proper versioning for src/built files.

1. `git checkout gh-pages`
2. `git merge master`
3. `grunt`
4. `cp -r docs/build/. ./`
5. commit all changes & push to origin
