const Router = require("koa-router")()
const exampleData01 = require('../data/example01')

Router.get('/test/data', async (ctx, next) => {
	ctx.response.body = exampleData01;
})
Router.get('/test/data1', async (ctx, next) => {
	ctx.response.body = exampleData01;
})

module.exports = Router;