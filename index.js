'use strict'

const debug = require('debug')

const {PREFIX_DEBUG = 'tadashi-debug'} = process.env

const log = debug(`${PREFIX_DEBUG}:log`)
const error = debug(`${PREFIX_DEBUG}:error`)
const info = debug(`${PREFIX_DEBUG}:info`)
const warn = debug(`${PREFIX_DEBUG}:warn`)

log.log = console.log.bind(console)
log.info = console.info.bind(console)
log.warn = console.warn.bind(console)

exports.log = log
exports.error = error
exports.info = info
exports.warn = warn
