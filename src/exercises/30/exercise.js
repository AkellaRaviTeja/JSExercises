// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page
// - What is the function that you have used?

let timer = 0;
let interval = setInterval(() => {
    timer += 1;
    if (timer === 60) {
        clearInterval(interval);
    }
    document.getElementById('timer').innerHTML = timer;
}, 1000);