// Execute the below function.
// - There is an issue with the order of messages
// - Reason here why is it so.
// - whenever the execution reaches setTimeout() then it will be sent to Browser API and waits for the time to complete meanwhile the execution continues to execute other parts of the code

// - Explain in your own terms what are event loops?
// - The event loop is a constantly running process that monitors both the callback queue and the call stack.If the call stack is not empty, 
//   the event loop waits until it is empty and places the next function from the callback queue to the call stack.

function learnEventLoops() {
  console.log("Learning event loops");
  setTimeout(function print() {
    console.log("50% Learning done!");
  }, 0); // 0 millisec
  setTimeout(function print() {
    console.log("75% Learning done!");
  }, 1); // 1 millisec
  console.log("Learning completed!!");
}
learnEventLoops();
