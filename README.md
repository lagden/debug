# debug

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]


[npm-img]:         https://img.shields.io/npm/v/@tadashi/debug.svg
[npm]:             https://www.npmjs.com/package/@tadashi/debug
[ci-img]:          https://github.com/lagden/debug/actions/workflows/nodejs.yml/badge.svg
[ci]:              https://github.com/lagden/debug/actions/workflows/nodejs.yml
[coveralls-img]:   https://coveralls.io/repos/github/lagden/debug/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/debug?branch=master


Small debugging utility


## Install

```
$ npm i -S @tadashi/debug
```


## API

The API is the same of https://github.com/debug-js/debug  
It's just a preset: https://github.com/debug-js/debug#output-streams



## Environment Variables

⚠️ **Warning**

> You must set the environment variables `DEBUG_PREFIX`  
> Default is: `@tadashi`


## Usage

```js
import * as debug from '../src/debug.js'

// log
debug.log('Apenas um show')

// error
debug.error('Crap!')

// info
debug.info('This is an information')

// warn
debug.warn('Atention!')
```


## Donate ❤️

- BTC: bc1q7famhuj5f25n6qvlm3sssnymk2qpxrfwpyq7g4


## License

MIT © [TJ Holowaychuk](tj@vision-media.ca)
MIT © [Thiago Lagden](https://github.com/lagden)
