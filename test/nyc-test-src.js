const tea = ['chai', 'matcha', 'oolong']

module.exports = (input) => {
  if (input < 2) {
    return tea[input]
  } else {
    return 'unknow'
  }
}