# debug

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![Dependency Status][dep-img]][dep]
[![devDependency Status][devDep-img]][devDep]

[![XO code style][xo-img]][xo]
[![Greenkeeper badge][greenkeeper-img]][greenkeeper]

[npm-img]:         https://img.shields.io/npm/v/@tadashi/debug.svg
[npm]:             https://www.npmjs.com/package/@tadashi/debug
[ci-img]:          https://travis-ci.org/lagden/debug.svg
[ci]:              https://travis-ci.org/lagden/debug
[coveralls-img]:   https://coveralls.io/repos/github/lagden/debug/badge.svg?branch=master
[coveralls]:       https://coveralls.io/github/lagden/debug?branch=master
[dep-img]:         https://david-dm.org/lagden/debug.svg
[dep]:             https://david-dm.org/lagden/debug
[devDep-img]:      https://david-dm.org/lagden/debug/dev-status.svg
[devDep]:          https://david-dm.org/lagden/debug#info=devDependencies
[xo-img]:          https://img.shields.io/badge/code_style-XO-5ed9c7.svg
[xo]:              https://github.com/sindresorhus/xo
[greenkeeper-img]: https://badges.greenkeeper.io/lagden/debug.svg
[greenkeeper]:     https://greenkeeper.io/


Small debugging utility

It's just a pre setup: https://github.com/visionmedia/debug#output-streams


## Install

```
$ npm i -S @tadashi/debug
```


## API

The API is the same of https://github.com/visionmedia/debug


## Environment Variables

**Attention**

You must set an environment variables `DEBUG_NAME`  
Default is: `tadashi-debug`


## Usage

```js
'use strict'

const {log, error, info, warn} = require('@tadashi/debug')

// log
log('Apenas um show')

// error
error('Crap!')

// info
info('This is very important!')

// warn
warn('Atention!!')
```


## License

MIT © [Thiago Lagden](http://lagden.in)
