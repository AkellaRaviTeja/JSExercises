// Execute the below function.
// - There is an issue with the order of messages
// - Reason here why is it so.
// - Explain in your own terms what are event loops?



/**
 * Event loop is like main thread in node.js
 * when API's like setTimeout is invoked it pushes it into a taskQueue, which executes when the time runs out.
 * So, here the console with 50% and 75% message are getting pushed into a queue and mean while learning completed is being printed in the console
 * so if we are delaying the 75% message by 1millisec, using setTimeout on learning completed message with atleast 2millisec should fix the issue
 */

 function learnEventLoops() {
  console.log("Learning event loops");
  setTimeout(function print() {
    console.log("50% Learning done!");
  }, 0); // 0 millisec
  setTimeout(function print() {
    console.log("75% Learning done!");
  }, 1); // 1 millisec
  
  // console.log("Learning completed!!"); 
  setTimeout(function print() {
    console.log("Learning completed!!");
  }, 2);

}

learnEventLoops();
