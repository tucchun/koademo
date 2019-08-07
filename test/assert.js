const { assert } = require('chai')
const foo = 'bar'
const beverages = {
  tea: ['chai', 'matcha', 'oolong']
}
assert.typeOf(foo, 'string')

assert.typeOf(foo, 'string', 'foo is string')

assert.equal(foo, 'bar', `foo equal 'bar'`)

assert.lengthOf(foo, 3, `foo's value has a length of 3`)

assert.lengthOf(beverages.tea, 3, `beverages has 3 types of team`)

