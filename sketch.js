var counter = 0,timeLeft = 110;

function convertSeconds(s) {
   var min = floor(s/60);
   var sec = s%60;
   return nf(min,2)+":"+nf(sec,2);
}

function setup() {
   function timeIt() {
     counter++
     
   
     camera.y = y;
   }
   setInterval(timeIt,1000);
}
