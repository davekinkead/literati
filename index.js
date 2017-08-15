'use strict'

const fs = require('fs')
const rfs = require('require-from-string')
const code_block = /^[ ]{4,}|\t+/

module.exports = (filename) => {
  let code = fs.readFileSync(filename).toString().split('\n').filter((line) => {
    //  TODO: Ignore YAML front matter
    //  TODO: Deal with multi line lists
    if (line.match(code_block)) {
      return line
    }
  }).join('\n')

  return rfs(code)
}