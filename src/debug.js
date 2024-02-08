import process from 'node:process'
import debug from 'debug'

const {DEBUG_PREFIX = '@tadashi'} = process.env

const error = debug(`${DEBUG_PREFIX}:error`)
const warn = debug(`${DEBUG_PREFIX}:warn`)
const info = debug(`${DEBUG_PREFIX}:info`)
const log = debug(`${DEBUG_PREFIX}:log`)
const console = debug(`${DEBUG_PREFIX}:console`)

const colors = [0, 5, 40, 60, 10]

log.color = debug.colors[colors[0]]
info.color = debug.colors[colors[1]]
warn.color = debug.colors[colors[2]]
error.color = debug.colors[colors[3]]
console.color = debug.colors[colors[4]]

export {
	log,
	info,
	warn,
	error,
	console,
}
export {default} from 'debug'
