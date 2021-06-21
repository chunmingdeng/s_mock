# 关于mockserve介绍

## 目的
使用mockserve主要是帮助前端能够优雅的设置mock数据。

## 技术栈
node、mockjs

## 项目结构介绍
- index.js  
mockserve的入口文件，用于启动mockserve
- router  
用于定义mockserve中所有需要mock的接口
- router/Readme.md  
介绍了router中的结构

## 可能出现的问题
目前项目的启动port设置的是30001，在/index.js中设置，如果项目起不来，查看是否port被占用
