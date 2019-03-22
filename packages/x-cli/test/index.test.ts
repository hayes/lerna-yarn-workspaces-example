import test from 'ava';
import { awesomeFn } from '@quramy/x-core';
import { cli } from '../src/main';

test('test', async t => {
  const actual = await cli();
  t.true(actual);

  t.deepEqual(awesomeFn(), 'Hello');
});
