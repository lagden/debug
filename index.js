'use strict'

const debug = require('debug')

const {PREFIX_DEBUG = 'tadashi-debug'} = process.env
const log = debug(`${PREFIX_DEBUG}:log`)
const error = debug(`${PREFIX_DEBUG}:error`)

log.log = console.log.bind(console)

exports.log = log
exports.error = error
