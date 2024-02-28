import {test} from 'node:test'
import assert from 'node:assert/strict'
import debug, * as _debug from '../src/debug.js'

test('debug', () => {
	debug.enable('@tadashi:*')
	for (const m of ['log', 'info', 'warn', 'error', 'console']) {
		_debug[m](`___${m}___`)
	}
	assert.ok(true)
})

test('color', () => {
	debug.enable('@tadashi:*')
	for (const color of debug.colors) {
		_debug.log.color = color
		_debug.log(`___${color}___`)
	}
	assert.ok(true)
})
