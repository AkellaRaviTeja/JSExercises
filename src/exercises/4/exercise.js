// Complete the below function. Print welcome greetings to a person.
//  - Use string template literal
//  - Comment its uses.

function greeting(firstName, lastName) {
  let welcomeGreeting = `Hello ${firstName} ${lastName}!`;
  //Template literals provide an easy way to interpolate variables and expressions into strings.
  console.log(welcomeGreeting);
}
module.exports = greeting;