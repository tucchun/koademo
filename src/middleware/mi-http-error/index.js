const path = require('path')
const nunjucks = require('nunjucks')
module.exports = (opts = {}) => {
  const env = opts.env || process.env.NODE_ENV || 'development'
  const folder = opts.errorPageFolder
  const templatepath = path.resolve(__dirname, './error.html')
  let fileName = 'other'
  return async (ctx, next) => {
    try {
      await next()
      if (ctx.response.status === 404 && !ctx.response.body) ctx.throw(404)
    } catch (e) {
      ctx.log.error(JSON.stringify(e))
      let status = parseInt(e.status)
      const message = e.message
      if (status >= 400) {
        switch(status){
          case 400:
          case 404:
          case 500:
            fileName = status
            break;
          default:
            fileName = 'other'
        }
      } else {
        status = 500
        fileName = status
      }
      const filePath = folder ? path.join(folder, `${fileName}.html`): templatepath;
      try {
        nunjucks.configure(folder? folder : __dirname)
        const data = await nunjucks.render(filePath, {
          env: env,
          status: e.status || message,
          error: message,
          status: e.stack
        })
        ctx.status = status
        ctx.body = data
      } catch (error) {
        ctx.throw(500, `错误页渲染失败：${e.message}`);
        ctx.log.error(JSON.stringify(error))
      }
    }
  }
}