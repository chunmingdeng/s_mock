const Koa = require('koa')
const Mock = require('mockjs')
const Router = require('./router/index')

const app = new Koa()
// app.use(async ctx => {
// 	ctx.body = Mock.mock({
// 		status: 200,
// 		data: [{
// 			name|10: 'test'
// 		}]
// 	})
// })

app.use(async (ctx, next) => {
	ctx.body = '欢迎访问mock数据服务';
	next();
})

app.use(Router.routes());

app.listen(30001);