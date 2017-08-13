'use strict'

const fs = require('fs')
const rfs = require('require-from-string')
const code_block = /^[ ]{4,}|\t+/

function Literati () {}

Literati.prototype.read = (filename, opts) => {
  return read(filename)
}

Literati.prototype.exec = (filename) => {
  return exec(filename)()
}

function read (filename, opts) {
    return fs.readFileSync(filename).toString().split('\n').filter((line) => {
      //  TODO: Ignore YAML front matter
      //  TODO: Deal with multi line lists
      if (line.match(code_block)) {
        return line
      }
    }).join('\n')
  }

function exec (filename, opts) {
  return rfs( read(filename, opts) )
}


module.exports = new Literati()