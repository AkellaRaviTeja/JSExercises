// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page
// - What is the function that you have used?

let count=0;
let time=document.getElementById('showTime');
let timer=setInterval(()=>{
    if(count==61) {
        stopTimer();
    }else{
        time.innerText=count;
        count+=1;
    }
},1000);

function stopTimer(){
    clearInterval(timer);
}