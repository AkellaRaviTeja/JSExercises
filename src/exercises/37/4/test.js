const greeting = require('./exercise4')

test('testing string literals', () => {
   let firstName = "Hema"
   let lastName="Satya"
   expect(greeting(firstName, lastName)).toStrictEqual(`Welcome ${firstName} ${lastName}.`)
})

test('testing string literals', () => {
   let firstName = ""
   let lastName=""
   expect(greeting(firstName, lastName)).toStrictEqual(`Welcome ${firstName} ${lastName}.`)
})