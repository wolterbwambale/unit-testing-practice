const reverseString=require('./reverseString')

test('Reverse string', () => {
    const text = 'car';
    const reversed = reverseString(text);
    expect(reversed).toBe('rac');
  });