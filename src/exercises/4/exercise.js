// Complete the below function. Print welcome greetings to a person.
//  - Use string template literal
//  - Comment its uses.
// Ans: Template literals allow you to use strings or embedded expressions in the form of a string
function greeting(firstName, lastName) {
 
  let welcomeGreeting = `Welcome, ${firstName} ${lastName}!`;

  console.log(welcomeGreeting);
}
