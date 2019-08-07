const nock = require('nock')
const request = require('supertest')
// const Koa = require('koa')

// console.log(request)
describe('request', () => {
  beforeEach(() => {
    nock('http://test.com')
    .get('test1')
    .delay(200)
    .reply(200, {foo: 'bar'})
  }),
  it('core', done => {
    // const app = new Koa()
    request.post('/test1').end((err, res) => {
      console.log(err)
      res.text.should.equal('{"foo": "bar}')
      res.body.foo.should.equal('bar')
      done();
    })
  
  })
})