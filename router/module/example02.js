const Router = require("koa-router")()
const Mock = require('mockjs')

Router.get('/test/data2', async (ctx, next) => {
	//定义mock数据模版
	const data = Mock.mock({
		"list|10": [{
			"email": "@email",
			"name": "@FIRST"
		}] 
	})
	ctx.response.body = {
		status: 200,
		data: data.list
	}
})

module.exports = Router;