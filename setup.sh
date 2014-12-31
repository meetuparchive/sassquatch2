#!/bin/bash

echo "~~~~~~~~ installing node modules..."
npm install

echo "~~~~~~~~ installing bower components..."
bower install

echo "~~~~~~~~ recompile sassquatch..."
grunt

exit 0
