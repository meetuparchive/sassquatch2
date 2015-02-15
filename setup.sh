#!/bin/bash

echo "~~~~~~~~ installing npm modules..."
npm install

echo "~~~~~~~~ installing bower components..."
bower install

echo "~~~~~~~~ rebuilding..."
grunt

exit 0
