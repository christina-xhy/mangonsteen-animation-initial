#!/usr/bin/env bash
rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m deploy
git remote add origin git@github.com:christina-xhy/mangonsteen-animation.git
git push -f origin main:main
cd -
