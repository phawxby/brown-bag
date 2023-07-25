import doSomething from '.';
import { test, expect } from 'vitest';

test('simple test', () => {
  expect(doSomething('foo')).toEqual('---foo---');
});

test('broken test', () => {
  expect('foo').toEqual('foo');
});

test(
  'flaky test',
  () => {
    expect(Math.random()).toBeLessThan(0.5);
  },
  { retry: 0 }
);
