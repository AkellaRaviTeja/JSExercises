// Execute the below function.
// - There is an issue with the order of messages
// - Reason here why is it so.
//Ans: In the code, the message "Learning completed!!" is printed before the messages printed inside the setTimeout functions, even though the setTimeout functions have less delay times. This is because setTimeout functions are added to the event queue and executed after the main thread has finished executing the synchronous code.

// - Explain in your own terms what are event loops?
// Ans: An event loop is something that pulls stuff out of the queue and places it into the function execution stack whenever the function stack becomes empty.The event loop is the secret by which JavaScript gives us an illusion of being multithreaded even though it is single-threaded,Event loops are a fundamental part of how JavaScript works. They manage the execution of code by continuously monitoring the call stack and the event queue. The call stack is where synchronous code execution happens, while the event queue is where asynchronous code execution is scheduled. The event loop constantly checks if the call stack is empty and if so, it dequeues the next function from the event queue and executes it.

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
