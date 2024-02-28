import process from 'node:process'
import debug from 'debug'

const {DEBUG_PREFIX = '@tadashi'} = process.env

const _error = debug(`${DEBUG_PREFIX}:error`)
const _warn = debug(`${DEBUG_PREFIX}:warn`)
const _info = debug(`${DEBUG_PREFIX}:info`)
const _log = debug(`${DEBUG_PREFIX}:log`)
const _console = debug(`${DEBUG_PREFIX}:console`)

const findColor = color => v => v === color

/* c8 ignore start */
_log.color = debug.colors.find(findColor(20)) ?? debug.colors[1]
_info.color = debug.colors.find(findColor(39)) ?? debug.colors[3]
_warn.color = debug.colors.find(findColor(179)) ?? debug.colors[2]
_error.color = debug.colors.find(findColor(196)) ?? debug.colors[5]
_console.color = debug.colors.find(findColor(40)) ?? debug.colors[4]
/* c8 ignore stop */

export {
	_log as log,
	_info as info,
	_warn as warn,
	_error as error,
	_console as console,
}

export {default} from 'debug'
