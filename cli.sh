#!/bin/sh
cd functions && npm run-script build && node lib/cli.js $@
