var counter = 0,timeLeft = 110;

function convertSeconds(s) {
   var min = floor(s/60);
   var sec = s%60;
   return nf(min,2)+":"+nf(sec,2);
}

function setup() {
   function timeIt() {
     counter++
     
     var timer = select("#timer");
     timer.html(convertSeconds(timeLeft-counter));
   }
   setInterval(timeIt,1000);
}
