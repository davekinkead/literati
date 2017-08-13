# Literati

A literate programming helper in Javascript. 


## Usage

Require Literati to parse any indented code blocks in a text file a la markdown (4+ spaces or 1+ tab).

    const my_module = require('literati')('./my_module')


## Future Features (one day...)

- [] Parse ticked and named codeblocks

- [] Access Literati as an object programatically

      const Literati = require('literati')

- [] Specify what languages to extract from ticked

      Literati.read('./filename', {only: ['javascript', 'shell'], inline: true})

- [] Run it via CLI

      $ cat readme.md | literati -js | node

Copyright 2017 Dave Kinkead. Released under the MIT License.