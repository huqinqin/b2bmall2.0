#!/usr/bin/env bash
#先变异dll动态库
npm run build --app dll
#然后将编译出来的文件copy到dev目录
cp  -r  ./dist/* ./dev

#以下为编译普通模块,编译完成后也要copy到dev目录
npm run build --app test
cp  -r  ./dist/* ./dev
npm run build --app tool
cp  -r  ./dist/* ./dev
