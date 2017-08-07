const should = require('should')
const lit = require('../index.js')

console.log(require('../index.js')('./test/demo.js.md'))

describe('Literally', () => {

  it('should load the require file', () => {
    (require('../index.js')('./test/demo.js.md')).should.be.instanceOf(Function)
  })

  it('should only return code blocks', () => {
    (require('../index.js')('./test/demo.js.md')()).should.equal(125)
  })
})