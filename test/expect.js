const { expect } = require('chai')
const foo = 'bar'
const beverages = {
  tea: ['chai', 'matcha', 'oolong']
}

expect(foo).to.be.a('string')

expect(foo).to.equal('bar')

expect(foo).be.have.lengthOf(3)

expect(beverages).to.have.property('tea').with.lengthOf(2)
