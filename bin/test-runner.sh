#!/bin/bash

node_modules/.bin/mocha -c $@ | node_modules/.bin/bunyan --output long
watchman-make --pattern '**/*.js' --make node_modules/.bin/mocha -t "-c $@" | node_modules/.bin/bunyan --output long
