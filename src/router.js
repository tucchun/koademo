const router = require('../node_modules/koa-router/lib/router.js')()
// const homeServer = require('./controller/home.js')
// const {
//   getAllCustomers,
//   getCustomerById,
//   getCustomerByName,
//   createCustomer,
//   updateCustomer,
//   deleteCustomer
// } = require('./db/db')
// const jsonMIME = 'application/json'
module.exports = (app) => {
  router.get('/', app.controller.home.index)

  router.get('/home', app.controller.home.home)

  router.get('/home/:id/:name', app.controller.home.homeParams)

  router.get('/user', app.controller.home.user)

  router.post('/user/login', app.controller.home.login)

  // router.get('/customer', async ctx => {
  //   const customers = await getAllCustomers()
  //   ctx.type = jsonMIME
  //   ctx.body = {
  //     status: 0,
  //     data: customers
  //   }
  // })

  // router.get('/customer/:id', async ctx => {
  //   const customer = await getCustomerById(ctx.params.id)
  //   ctx.type = jsonMIME
  //   ctx.body = {
  //     status: 0,
  //     data: customer
  //   }
  // })

  // router.get('/customer/name/:name', async ctx => {
  //   const customer = await getCustomerByName(ctx.params.name)
  //   ctx.type = jsonMIME
  //   ctx.body = {
  //     status: 0,
  //     data: customer
  //   }
  // })

  // router.post('/customer', async ctx => {
  //   const customer = ctx.request.body
  //   customer.id = `${+new Date()}`
  //   await createCustomer(customer)
  //   ctx.type = jsonMIME
  //   ctx.body = {
  //     status: 0
  //   }
  // })

  // router.put('/customer/:id', async ctx => {
  //   const id = ctx.params.id
  //   const customer = ctx.request.body
  //   await updateCustomer(id, customer)
  //   ctx.type = jsonMIME
  //   ctx.body = {
  //     status: 0
  //   }
  // })

  // router.delete('/customer/:id', async ctx => {
  //   await deleteCustomer(ctx.params.id)
  //   ctx.type = jsonMIME
  //   ctx.body = {
  //     status: 0
  //   }
  // })

  

  app.use(router.routes()).use(router.allowedMethods())
  // .use(async (ctx, next) => {
  //   try{
  //     next()
  //   } catch(ex) {
  //     ctx.type = jsonMIME
  //     ctx.body = {
  //       status: -1,
  //       message: ex.message
  //     }
  //   }
  // })


}