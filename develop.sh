#! /usr/bin/env bash

# This runs the development server. Use ./init.sh beforehand to install the
# dependencies to node_modules/.

if [[ $OSTYPE == "msys" ]]; then
    export MSYS_NO_PATHCONV=1 
fi
docker run -it -w /bedrock -v $(pwd):/bedrock -p 3000:3000 node:14.15.0-buster npm start
