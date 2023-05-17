const stringLength = require('./stringLength');

test('returns the correct length of a string', () => {
  expect(stringLength('worldbank')).toBe(9);
});

test('throws an error if the string is less than 1 character long', () => {
  expect(() => stringLength('')).toThrow('String must be at least 1 character long.');
});

test('throws an error if the string is longer than 10 characters', () => {
  expect(() => stringLength('ItWorldIsSweetAndClear')).toThrow('String must not be longer than 10 characters.');
});
