const findTheLength = require('./exercise6')

test('testing the length of an array', () => {
   expect(findTheLength([])).toStrictEqual(0)
   expect(findTheLength(['2', 'a'])).toStrictEqual(2)
   expect(findTheLength(1)).toStrictEqual(`Please give array as input.`)
})