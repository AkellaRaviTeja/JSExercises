// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page
// - What is the function that you have used?


function countDown(timer) {
    if(timer > 60) return;
    let display = document.getElementsByClassName('timer')[0];
    if(timer == 0) { 
        display.innerHTML = `starting Timer...`;
    }
    else if(timer < 60) {
        display.innerHTML = `${timer}s`;
    }
    else {
        display.innerHTML = `1min completed.`
    }
    showTimer(timer + 1);
}

function showTimer(time) {
    setTimeout(() => {
        countDown(time)
    }, 1000);
}

showTimer(0)