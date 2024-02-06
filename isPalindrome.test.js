const isPalindrome = require('./isPalindrome');

test('isPalindrome returns true for "taco cat"', () => {
  expect(isPalindrome('Tacocat')).toBe(true);
});

test('isPalindrome returns false for "Enayet"', () => {
  expect(isPalindrome('Enayet')).toBe(false);
});