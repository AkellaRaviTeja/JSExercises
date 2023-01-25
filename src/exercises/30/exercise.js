// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page
// - What is the function that you have used?

let index = 0
function setTime() {
    index ++
    document.getElementById('app').innerHTML = index
    if(index === 60)
        clearInterval(myInterval)
}

const myInterval = setInterval(setTime,1000)

