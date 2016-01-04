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
`grunt ghpages`     | __Caution__: commits compiled docs for your branch to `gh-pages`


### Creating a release
Until I write the script for creating a release, the process is unfortunately manual.
Because we're using the git-flow branching model, all fix and feature commits flow into
the `develop` branch. The `master` branch is our "production" branch.

#### Beginning the release
We begin all releases with a _release branch_ and a _release tag_.

1. from `develop`, checkout a `release/X.X.X` branch
2. in `release/X.X.X`, increment the version number in `bower.json` and `package.json`
3. commit the result & push
4. `git tag -a vX.X.X -m "tag message"`
5. git push origin vX.X.X

Once the tag ref is pushed to origin the version is available to install via bower in chapstick or elsewhere.

#### Finishing a release without chapstick dependencies
If the changes in your `release/X.X.X` branch appear stable and **do not** require updates in chapstick:

1. merge the release branch, `release/X.X.X` to `master`
2. merge `master` into `develop`
3. _don't forget to rebuild docs!_ (run `grunt ghpages` in `master`)

#### Finishing a release with chapstick dependencies
If your release includes breaking changes and requires code changes in chapstick, follow these steps:

1. start a chapstick branch for your sq2 release
2. set the `bower.json` version for `sassquatch2` in chapstick to match your release number
3. if you need to make fixes to the `release/X.X.X` branch, you can retag the release to include your fixes (see below)
4. when your chapstick branch with the sq2 update releases to production, you can follow normal steps for finishing a sq2 release (merge the release branch to `master`)
5. _don't forget to rebuild docs!_ (run `grunt ghpages` in `master`)


#### Retagging a release
Sometimes you need to retag a release to incorporate new commits. Here are the steps for retagging a "1.5.0" release after you make a few fix commits to the release branch:

1. `git pull` - fetches tag refs from origin
2. `git tag -d v1.5.0` - deletes the **old** v1.5.0 tag ref
3. `git push origin :refs/tags/v1.5.0` - pushes your delete of the ref to origin
4. `git tag -a v1.5.0 -m "My new and improved release 1.5.0"` - create **new** v1.5.0 tag
5. `git push origin v1.5.0` - push the **new** v1.5.0 tag to origin
6. in chapstick, just `bower cache clean` and `rm -rf static/components/sassquatch2` then reinstall `sassquatch2` to get updated commits for the tag

