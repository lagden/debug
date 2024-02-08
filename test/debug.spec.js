import {test} from 'node:test'
import assert from 'node:assert/strict'
import debug from '../src/debug.js'
import * as _debug from '../src/debug.js'

test('debug', () => {
	debug.enable('@tadashi:*')
	for (const m of ['log', 'info', 'warn', 'error', 'console']) {
		_debug[m](`___${m}___`)
	}
	assert.ok(true)
})
