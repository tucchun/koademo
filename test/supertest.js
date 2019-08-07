const request = require('supertest')
const Koa = require('koa')
const cors = require('../src/middleware/index.js')

describe('test.index.js', () => {
  it(`should always set 'Access-c'`, done => {
    const app = new Koa()
    app.use(function (ctx) {
      ctx.body = {foo: 'bar'}
    })
    request(app.listen(3000)).get('/').expect({foo: 'bar'}).expect(200, done)
  })
})