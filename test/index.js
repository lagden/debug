'use strict'

import test from 'ava'
import sinon from 'sinon'
import {log, error} from '../'

test('log', t => {
	log.log = sinon.stub()
	log('test log')
	t.true(log.log.called)
})

test('error', t => {
	error.log = sinon.stub()
	error('test error')
	t.true(error.log.called)
})
