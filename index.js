'use strict'

const _debug = require('debug')

function debug(prefix = 'tadashi-debug') {
	const log = _debug(`${prefix}:log`)
	const info = _debug(`${prefix}:info`)
	const warn = _debug(`${prefix}:warn`)
	const error = _debug(`${prefix}:error`)

	log.color = 4
	info.color = 6
	warn.color = 3
	error.color = 1

	log.log = console.log.bind(console)
	info.log = console.info.bind(console)
	warn.log = console.warn.bind(console)

	return {
		log,
		info,
		warn,
		error
	}
}

module.exports = debug
