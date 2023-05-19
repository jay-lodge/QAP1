/// toEqual check if the array has the same values and not.toBe checks that it's not just pulling the same array but rether a clone of said array.
const CloneArray = require('./ArrayClone')

   test('clone array', () => {
   const array = [1, 2, 3]
   expect(CloneArray(array)).toEqual(array)
   expect(CloneArray(array)).not.toBe(array)
})
