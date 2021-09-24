var counter = 0,timeLeft = 110;
var y;

function convertSeconds(s) {
   var min = floor(s/60);
   var sec = s%60;
   return nf(min,2)+":"+nf(sec,2);
}

function setup() {
   
   
   y = createInput("seconds");
   y.position(200,200);
   
   setInterval(timeIt,1000);
}

function draw() {
   if(y.value) {
    function timeIt() {
     counter++;
     var timer = select("#timer");
     timer.html(convertSeconds(timeLeft-counter));
    }
   }
   var v = y.value();
}
