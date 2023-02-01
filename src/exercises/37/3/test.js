const checkIfArray = require('./exercise3.js');

test('testing if given parameter is array or not', () => { 
   expect(checkIfArray([])).toStrictEqual("Given input is an Array")
   expect(checkIfArray("")).toStrictEqual("Given input is not an Array")
 })