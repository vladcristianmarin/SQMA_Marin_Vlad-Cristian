const add = require('.');

// Test case 1
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// Test case 2
test('adds -1 + 1 to equal 0', () => {
  expect(add(-1, 1)).toBe(0);
});

// Test case 3
test('adds 10 + 5 to equal 15', () => {
  expect(add(10, 5)).toBe(15);
});
