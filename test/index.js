'use strict'

import test from 'ava'
import sinon from 'sinon'
import debug from '../'

const _debug = debug()

test('debug', t => {
	for (const m of ['log', 'error', 'info', 'warn']) {
		_debug[m](`___${m}___`)
		const stub = sinon.stub(_debug, m)
		_debug[m]('test...')
		t.true(stub.called)
	}
})
