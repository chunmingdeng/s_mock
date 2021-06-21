const Router = require('koa-router')()
//按功能模块引入对应的mock接口
const example01 = require('./module/example01').routes()
const example02 = require('./module/example02').routes()

//将所有的接口作为middleware挂载到koa-router上
Router.use(example01, example02);

module.exports = Router;