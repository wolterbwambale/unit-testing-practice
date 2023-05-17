const sum=require('./sum');
test('add 2+5',()=>{
    expect(sum(2,5)).toBe(7)
})