// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page
// - What is the function that you have used?

let [minutesTens,minutesUnit, secondsTens,secondsUnit] = [0, 0, 0, 0];
let int = null;

document.getElementById('start').addEventListener('click', ()=>{
   if(int!==null){
       clearInterval(int);
   }
   int = setInterval(displayTimer,1000);
});
function stop(){clearInterval(int)}

function displayTimer() {
   secondsUnit++;
   if (secondsUnit==10) { 
      secondsUnit = 0
      secondsTens++;
   }
   if(secondsTens == 6){
      secondsTens=0;
      minutesUnit++;
      stop()
   }
   
   document.getElementById('secondsUnit').innerHTML = secondsUnit;
   document.getElementById('secondsTens').innerHTML = secondsTens;
   document.getElementById('minutesUnit').innerHTML = minutesUnit;
   document.getElementById('minutesTens').innerHTML = minutesTens;
}












