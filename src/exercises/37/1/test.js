const printOneToTen = require('./exercise1.js')

test('testing function that prints 1 to 10 are successful', () => {
   let arr = []
   for (let i = 1; i <= 10; i++){
      arr.push(i)
   }
   expect(arr).toStrictEqual(printOneToTen())
})



