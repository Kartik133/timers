var counter = 0,timeLeft = 110,t;
var y = 200;

function convertSeconds(s) {
   var min = floor(s/60);
   var sec = s%60;
   return nf(min,2)+":"+nf(sec,2);
}

function setup() {
   noCanvas();
   
   function timeIt() {
     counter++
     t = createElement("h1");
     t.position(200,y);
     t.html(convertSeconds(timeLeft-counter));
     y+=50;
   }
   setInterval(timeIt,1000);
}

function draw() {
   
}
