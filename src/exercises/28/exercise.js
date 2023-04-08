// Execute the below function.
// - There is an issue with the order of messages
// - Reason here why is it so.

/*Function calls form a stack of frames.
The function that is currently being executed is at the top of the stack.
When the function returns, the control is passed to the caller.
The stack is used to store all local variables of the function.
When a function is called, the parameters and local variables are pushed into the stack.
When the function returns, the local variables are popped out of the stack.
*/
/*A JavaScript runtime uses a message queue, which is a list of messages to be processed. Each message has an associated function that gets called to handle the message. 
At some point during the event loop, the runtime starts handling the messages on the queue, starting with the oldest one. To do so, the message is removed from the queue and its corresponding function is called with the message as an input parameter. As always, calling a function creates a new stack frame for that function's use. The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one). 
*/
/*The first two arguments to the function setTimeout are a message to add to the queue and a time value (optional; defaults to 0). The time value represents the (minimum) delay after which the message will be pushed into the queue. If there is no other message in the queue, and the stack is empty, the message is processed right after the delay. However, if there are messages, the setTimeout message will have to wait for other messages to be processed. For this reason, the second argument indicates a minimum time — not a guaranteed time. Zero delay doesn't mean the call back will fire-off after zero milliseconds. Calling setTimeout with a delay of 0 (zero) milliseconds doesn't execute the callback function after the given interval. It schedules the execution of the callback function after the given interval.
*/



// - Explain in your own terms what are event loops?
/* The event loop is a programming construct or design pattern that waits for and dispatches events or messages in a program. It works by making a request to some internal or external "event provider" (that generally blocks the request until an event has arrived), and then it calls the relevant event handler ("dispatches the event"). 
*/

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
