const commaSeparatedString = require('./exercise7')

test('testing whether strings seperated with the commas or not', () => {
   expect(commaSeparatedString(["Hema", "Satya"])).toStrictEqual("Hema,Satya")
   expect(commaSeparatedString([])).toStrictEqual("")
   expect(commaSeparatedString([1, 2])).toStrictEqual("1,2")
})