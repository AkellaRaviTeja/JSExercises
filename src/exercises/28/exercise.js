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
  setTimeout(() => {
    console.log("Learning completed!!");
  }, 2);
}
// main();
learnEventLoops();
//Event loops  is an essential piece that makes asynchronous behaviour possible All the
//async tasks will be running in the wb API environment
//Event loop looks into the call stack and detrmines it is empty or not
//Event loop takes the function fromthe callback queue and put them in callstack

//the reason for the wrong sequence is it first print "Learning event loop then for function print"
//50% learning done it will be printed after 0 millisec learning didn't have any waiting time
//so it is printed immediately to correct the order put the function inside the setTimeout
