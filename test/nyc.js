require('chai').should()
const beverages = {
  tea: ["chai", "matcha", "oolong"]
};
const getTea = require('./nyc-test-src')


describe('Array result', () => {
  it('find a kind of tea in beverages', () => {
    console.log(getTea(1))
    // console.log(11)
    getTea(11).should.to.be.oneOf(beverages.tea)
  })
})