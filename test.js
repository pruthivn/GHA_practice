import { test } from 'node:test';
import assert from 'node:assert';

// Application Logic
export function greet(name) {
  if (!name) return 'Hello, World!';
  return `Hello, ${name}!`;
}

// Automatically execute tests when run via 'npm test'
test('greet() function validation', () => {
  assert.strictEqual(greet(), 'Hello, World!');
  assert.strictEqual(greet('GitHub'), 'Hello, GitHub!');
});

console.log(greet('Developer'));
