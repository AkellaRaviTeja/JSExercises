// Execute the below function.
// - There is an issue with the order of messages
// - Reason here why is it so.
// - Explain in your own terms what are event loops?

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

// The code written in the setTimeout() is waiting in the callback queue until the code in the call stack
// gets completed. After the call stack gets empty, then the callback queue starts executing. That's why
// the setTimeout() executed after the normal flow of code even the delay is 0 microseconds.

// JavaScript has a runtime model based on an event loop, which is responsible for executing the code,
// collecting and processing events, and executing queued sub - tasks. It continuously monitors the events
// and processes.
