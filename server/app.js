const Koa = require('koa')
const logger = require('koa-logger')
const Router = require('koa-router')
const koaBody = require('koa-body')
const cors = require('@koa/cors')

const app = new Koa()
const router = new Router()
const generateRouter = require('./biz/index');

const port = 9000

app.use(logger());
app.use(koaBody({ multipart: true }));
app.use(cors());

generateRouter(router);

app.use(router.routes()).use(router.allowedMethods());

app.listen(port)
console.log(`DUIBA-H5-INTEGRAL listening on port ${port}`);