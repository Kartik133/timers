var counter = 0,timeLeft = 60;

function convertSeconds(s) {
   var min = floor(s/60);
   var sec = s%60;
   return nf(min,2)+":"+(sec,2);
}

function setup() {
   createCanvas(400,400);
   
   textAlign(CENTER);
   text(convertSeconds(timeLeft-counter),200,200);
   
   function timeIt() {
     counter++
     textAlign(CENTER);
     text(convertSeconds(timeLeft-counter),200,200);
   }
   setInterval(timeIt,1000);
}

function draw() {
   
}
