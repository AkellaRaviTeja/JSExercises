const binaryToDecimal = require('./exercise5')

test('testing whether the function converts binary to decimal or not', () => {
   expect(binaryToDecimal("00")).toStrictEqual(0)
   expect(binaryToDecimal("23")).toStrictEqual(NaN)
   expect(binaryToDecimal("101")).toStrictEqual(5)
})