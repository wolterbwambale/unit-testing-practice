const Calculator=require('./calculator');
describe('Calculator', () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });

test('add two numbers', () => {
  expect(calculator.add(5, 5)).toBe(10);
});

test('subtract two numbers', () => {
  expect(calculator.subtract(8, 2)).toBe(6);
});

test('divide two numbers', () => {
  expect(calculator.divide(9, 3)).toBe(3);
  expect(() => calculator.divide(20, 0)).toThrow('Cannot divide by zero.');
});

test('multiply two numbers', () => {
  expect(calculator.multiply(8, 4)).toBe(32);
});
});
