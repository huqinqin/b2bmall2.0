#!/bin/sh
GIT_BRANCH=dev
git checkout .
echo '获取所有分支最新代码到本地'
git fetch
yellow_echo "切换分支到 $GIT_BRANCH"
git checkout $GIT_BRANCH
echo '获取最新代码...'
git pull

#先变异dll动态库
npm run build --app dll
#然后将编译出来的文件copy到dev目录
cp  -r  ./dist/* ./dev

#以下为编译普通模块,编译完成后也要copy到dev目录
npm run build --app test
cp  -r  ./dist/* ./dev
npm run build --app tool
cp  -r  ./dist/* ./dev

#把所有js和css文件都copy到webroot
cp -r ./dev/static /app/webroot/
