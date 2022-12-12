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
/*
output:
Learning event lopps
Learning completed!!
50% Learning done!
75% Learning done!

JavaScript execute the code by line by line, javaScript follow synchronous.
while in the above code we use setTimeout function which make the execution asynchronous
those setTimeout function will executed after the time which was initialized.
javascript doesn't wait utill the execution of asynchronous functions.It will execute remaining 
lines of code.
*/
