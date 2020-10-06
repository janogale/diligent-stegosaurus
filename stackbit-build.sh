#!/usr/bin/env bash

set -e
set -o pipefail
set -v

curl -s -X POST https://api.stackbit.com/project/5f7c49a48fcf4e00169ea44a/webhook/build/ssgbuild > /dev/null

next build && next export

curl -s -X POST https://api.stackbit.com/project/5f7c49a48fcf4e00169ea44a/webhook/build/publish > /dev/null