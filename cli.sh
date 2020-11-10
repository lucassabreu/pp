#!/bin/sh
cd functions && npm run-script build > /dev/null && node lib/cli.js $@
