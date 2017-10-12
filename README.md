# debug

[![NPM version][npm-img]][npm]
[![Build Status][ci-img]][ci]
[![Coverage Status][coveralls-img]][coveralls]
[![Dependency Status][dep-img]][dep]
[![devDependency Status][devDep-img]][devDep]

[![XO code style][xo-img]][xo]
[![Greenkeeper badge][greenkeeper-img]][greenkeeper]


[greenkeeper-img]: https://badges.greenkeeper.io/lagden/debug.svg
[greenkeeper]:     https://greenkeeper.io/
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


Small debugging utility with log and error

It's just a pre setup: https://github.com/visionmedia/debug#output-streams


## Install

```
$ npm i -S @tadashi/debug
```


## API

The API is the same of https://github.com/visionmedia/debug

**Attention**  
You can set your `PREFIX_DEBUG`, default is: `tadashi-debug`


## Usage

Using the follow code: **sample.js**

```js
'use strict'

const debug = require('@tadashi/debug')

// logs
debug.log('Apenas um show')
debug.log('Ulalá')

// errors
debug.error('Ohhhh!!!')
debug.error('Crap!')
```


### Package.json

```json
{
  "scripts": {
    "default": "DEBUG=tadashi-debug:* node sample.js",
    "custom": "export PREFIX_DEBUG=sample-debug; DEBUG=$PREFIX_DEBUG:* node sample.js"
  }
}
```

### CLI

There's two samples: `default` and `custom`


#### Bash

```
$ DEBUG=tadashi-debug:* node sample.js
$ export PREFIX_DEBUG=sample-debug; DEBUG=$PREFIX_DEBUG:* node sample.js
```


#### Fish

```
$ env DEBUG="tadashi-debug:*" node sample.js
$ set -x PREFIX_DEBUG sample-debug; env DEBUG="$PREFIX_DEBUG:*" node sample.js
```


## License

MIT © [Thiago Lagden](http://lagden.in)
