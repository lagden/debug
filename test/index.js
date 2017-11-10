'use strict'

import test from 'ava'
import sinon from 'sinon'
import {log, error, info, warn} from '../'

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

test('info', t => {
	info.log = sinon.stub()
	info('test info')
	t.true(info.log.called)
})

test('warn', t => {
	warn.log = sinon.stub()
	warn('test warn')
	t.true(warn.log.called)
})
