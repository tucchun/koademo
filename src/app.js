const Koa = require('../node_modules/koa/lib/application.js')
const app = new Koa()
const router = require('./router.js')
const middleware = require('./middleware/index.js')
require('../lib/help')
middleware(app)
router(app)
app.listen(3000, () => {
  console.log('server is runing at http://localhost:3000')
})
app.on('error', (err, ctx) => {
  if (ctx && !ctx.headerSent && ctx.status < 500) {
    ctx.status = 500;
  }
  if (ctx && ctx.log && ctx.log.error){
    if (!ctx.state.logged) {
      ctx.log.error(err.stack)
    }
  }
})
process.on("SIGINT", () => {
  // 关闭数据库链接
  
})