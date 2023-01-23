// Complete the below function. Print welcome greetings to a person.
//  - Use string template literal
//  - Comment its uses.

// Uses : 
// 1. Template literals are used to insert variables and expressions into Strings without Concatenation
// 2. Template literals are used to write multiline strings without concatenation

function greeting(firstName, lastName) {
  let welcomeGreeting=`Welcome ${firstName} ${lastName}`;

  console.log(welcomeGreeting);
}
