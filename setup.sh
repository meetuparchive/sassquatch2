#!/bin/bash

echo "~~~~~~~~ getting gem system latest..."
gem update --system

echo "~~~~~~~~ getting latest for bundler gem..."
gem install bundler

echo "~~~~~~~~ installing required gems..."
bundle install

echo "~~~~~~~~ installing npm modules..."
npm install

echo "~~~~~~~~ installing bower components..."
bower install

echo "~~~~~~~~ rebuilding..."
grunt

exit 0
