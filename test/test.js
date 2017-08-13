const should = require('should')

describe('Literati', () => {

  it('should load the required file in passthrough mode', () => {
    (require('../index.js')('./test/one-twenty-five.md')).should.be.instanceOf(Function)
  })  

  it('should execute codeblocks from markdown file', () => {
    (require('../index.js')('./test/one-twenty-five.md')()).should.equal(125)
  })

  it('should return the API object')
  it('should accept an options argument')
  it('should only extract the language specified')
})