#!/bin/bash

echo "~~~~~~~~ pulling latest..."
git pull

echo "~~~~~~~~ installing bower components..."
rm -rf components/.
bower cache clean
bower install

echo "~~~~~~~~ rebuilding..."
grunt

exit 0
