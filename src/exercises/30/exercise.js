// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page
// - What is the function that you have used?

var timmer = 0;

var x = setInterval(function () {
  timmer += 1;
  if (timmer === 60) {
    clearInterval(x);
  }
  document.getElementById("demo").innerHTML = timmer;
}, 1000);
