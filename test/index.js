'use strict'

import test from 'ava'
import {log, error} from '../'

test('log', t => {
	log('test log')
	t.pass()
})

test('error', t => {
	error('test error')
	t.pass()
})
