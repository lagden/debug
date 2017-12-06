'use strict'

const _debug = require('debug')

function debug(prefix = 'tadashi-debug') {
	const log = _debug(`${prefix}:log`)
	const error = _debug(`${prefix}:error`)
	const info = _debug(`${prefix}:info`)
	const warn = _debug(`${prefix}:warn`)

	log.log = console.log.bind(console)
	log.info = console.info.bind(console)
	log.warn = console.warn.bind(console)

	return {
		log,
		info,
		warn,
		error
	}
}

module.exports = debug
