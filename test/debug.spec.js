import test from 'ava'
import debug from '../src/debug.js'
import * as _debug from '../src/debug.js'

test('debug', t => {
	debug.enable('@tadashi:*')
	for (const m of ['log', 'info', 'warn', 'error']) {
		_debug[m](`___${m}___`)
	}
	t.pass()
})
