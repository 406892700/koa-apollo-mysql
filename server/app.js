const Koa = require('koa')
const logger = require('koa-logger')
const Router = require('koa-router')
const koaBody = require('koa-body')
const cors = require('@koa/cors')
const fs = require('fs')
const path = require('path')
const  { ApolloServer } = require('apollo-server-koa')
const graphConfig = require('./graph/index')

const server = new ApolloServer(graphConfig())

const app = new Koa()
const router = new Router()
const generateRouter = require('./biz/index')

const port = 9000

app.use(logger());
app.use(koaBody({ multipart: true }))
app.use(cors());

generateRouter(router);

// 首页测试路由
router.get('/', async (ctx) => {
  console.log(__dirname)
  const tpl = fs.readFileSync(path.join(__dirname, '../index.html')).toString()
  ctx.body = tpl
})

app.use(router.routes()).use(router.allowedMethods())

server.applyMiddleware({ app })
app.listen(port)
console.log(`GRAPHQL listening on port ${port}`)
