const homeService = require('../service/home.js')
module.exports = {
  index: async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
  },
  home: async (ctx, next) => {
    ctx.log.info(ctx.request.query)
    ctx.log.info(ctx.request.querystring)
    ctx.response.body = '<h1>HOME page</h1>'
  },
  homeParams: async (ctx, next) => {
    ctx.log.info(ctx.params)
    ctx.response.body = '<h1>HOME page /:id/:name</h1>'
  },
  user: async (ctx, next) => {
    await ctx.render('home/login', {
      btnName: 'GOGOGO'
    })
  },
  login: async (ctx, next) => {
    let {name, password} = ctx.request.body;
    const res = ctx.app.service.home.login(name, password);
    if (res.status === '-1') {
      await ctx.render('home/login', res.data)
    } else {
      ctx.state.title = '个人中心'
      await ctx.render('home/success', res.data)
    }
  }
}