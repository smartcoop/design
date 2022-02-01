#! /usr/bin/env bash

# Install dependencies using Docker. This mounts the current directory, so
# dependencies will be present in a local node_modules/ directory.
# Use ./develop.sh to run the development server.

if [[ $OSTYPE == "msys" ]]; then
    export MSYS_NO_PATHCONV=1 
fi
docker run -it -w /bedrock -v $(pwd):/bedrock node:14.15.0-buster npm install
