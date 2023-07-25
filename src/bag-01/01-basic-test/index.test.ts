import doSomething from '.';
import { test, expect } from 'vitest';

test('simple test', () => {
  expect(doSomething('foo')).toEqual('---foo---');
});

test('flakey test', () => {
  expect(Math.random()).toBeLessThan(0.75);
});
