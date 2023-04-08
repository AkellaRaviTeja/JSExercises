// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page

// - What is the function that you have used?
// Ans: I used setInterval() for run to timer in every second after my timer go to 60 second i used clearInterval() for clear the interval.
let TimerTag = document.getElementById("timer");
let i = 0;
const timer = setInterval(() => {
  i++;
  TimerTag.textContent = `Timer: ${i}`;
  i >= 60 && clearInterval(timer);
}, 1000);
