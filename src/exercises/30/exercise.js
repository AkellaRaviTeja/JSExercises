// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page
// - What is the function that you have used?
let t = 0;
console.log("setTime out ");
let id = setInterval(() => {
  t++;
  if (t == 60) {
    clearInterval(id);
  } else {
    document.getElementById("heading").innerHTML = t;
  }
}, 1000);
//the function used it setInterval it executes here for every one second
//also used clearInterval to delete the timer after 60 secs
