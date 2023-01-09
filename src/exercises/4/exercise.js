// Complete the below function. Print welcome greetings to a person.
//  - Use string template literal
//  - Comment its uses.

//Using string template literal gives better readability and ends the use of 
// concatenation operator and single/double quotes for concatenation.
function greeting(firstName, lastName) {
  let welcomeGreeting=`Welcome ${firstName} ${lastName}.`;

  console.log(welcomeGreeting);
}


