#!/bin/bash

source /usr/local/bin/tputcolors

BRANCH_SRC="master"
BRANCH_DOC="gh-pages"
HR="----------------------------------------"

branch_current=$(git rev-parse --abbrev-ref HEAD)
is_branch_dirty=$(git diff --shortstat 2> /dev/null | tail -n1)

echo
echo "${t_white}${t_bold}Updating gh-pages branch.${t_reset}"
echo

# Check if current branch is dirty.
echo "Checking current branch status..."
if [[ $is_branch_dirty != "" ]]; then
    error "${t_red}Current branch is dirty." "Commit all changes before creating a release (don't want to forget anything.${t_reset}"
    echo
    exit 1
fi
success "${t_green}Current branch is clean.${t_reset}"
echo

echo "Switching to gh-pages branch..."
git checkout $BRANCH_DOC > /dev/null 2>&1
echo "Updating gh-pages from origin..."
git pull origin gh-pages > /dev/null 2>&1
echo "Updating gh-pages from ${BRANCH_SRC}..."
git merge master > /dev/null 2>&1

echo
echo "${t_white}${t_bold}Building documentation..."
echo "${HR}${t_reset}"

exit 0
