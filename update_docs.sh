#!/bin/bash

source /usr/local/bin/tputcolors

BRANCH_SRC="master"
BRANCH_DOC="gh-pages"
URL_DOCS="http://meetup.github.io/sassquatch2/layout.html"
HR="----------------------------------------"

branch_current=$(git rev-parse --abbrev-ref HEAD)
is_branch_dirty=$(git diff --shortstat 2> /dev/null | tail -n1)

returnToBranch() {
	echo "Returning to $branch_current..."
	git checkout $branch_current > /dev/null 2>&1
}

showSuccess() {
	echo "${t_white}${t_bold}${HR$}"
	echo "See changes at    ${URL_DOCS}"
	echo "${t_white}${t_bold}${HR$}"
}

echo
echo "${t_white}${t_bold}Updating gh-pages branch.${t_reset}"
echo "(updates ${BRANCH_DOC} from ${BRANCH_SRC})"
echo

# make sure gh-pages is locally checked out
if git show-ref --verify --quiet "refs/heads/${BRANCH_DOC}"; then
	: # branch already checked out
else
	git checkout -t origin/${BRANCH_DOC}
fi

# Check if current branch is dirty.
echo "Checking current branch status..."
if [[ $is_branch_dirty != "" ]]; then
    error "${t_red}Current branch is dirty." "Commit all changes before creating a release (don't want to forget anything.${t_reset}"
    echo
    exit 1
fi
success "${t_green}Current branch is clean.${t_reset}"
echo

# check out gh-pages; get latest from origin & master
echo "Switching to gh-pages branch..."
git checkout $BRANCH_DOC > /dev/null 2>&1
echo "Updating gh-pages from origin..."
git pull origin gh-pages > /dev/null 2>&1
echo "Updating gh-pages from ${BRANCH_SRC}..."
git merge master > /dev/null 2>&1

# build Sass and hologram docs
echo
echo "${t_white}${t_bold}Building documentation..."
echo "${HR}${t_reset}"
grunt --verbose

if [ $? -eq 0 ]
then
	success "${t_green}Documentation updated on ${BRANCH_DOC}${t_reset}"
	showSuccess
	returnToBranch
	exit 0
else
	error "${t_red}Build failed${t_red}"
	echo "Resetting ${BRANCH_DOC}..."
	git reset --hard > /dev/null 2>&1
	git clean -df > /dev/null 2>&1
	returnToBranch
	exit 1
fi
