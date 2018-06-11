'use strict'

import test from 'ava'
import sinon from 'sinon'
import debug from '..'

test('debug', t => {
	for (const m of ['log', 'info', 'warn', 'error']) {
		debug[m](`___${m}___`)
		const stub = sinon.stub(debug, m)
		debug[m]('test...')
		t.true(stub.called)
	}
})
