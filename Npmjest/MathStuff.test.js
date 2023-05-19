const sum = require('./MathStuff')

//test alllows you to use funtions like expect instead of if, else, or throw. expect is literally what it sounds like we expect a value to equal another value.
test('Adding numbers', () => {
    expect(sum(1, 2)).toBe(3)
})
 /// unit testing use --coverage



