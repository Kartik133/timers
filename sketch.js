var counter = 0,timeLeft = 60,t;

function convertSeconds(s) {
   var min = floor(s/60);
   var sec = s%60;
   return nf(min,2)+":"+nf(sec,2);
}

function draw() {
   createCanvas(400,400);
   
   function timeIt() {
     counter++
     textAlign(CENTER);
     t = createElement("h1");
     t.position(200,200);
     t.html(convertSeconds(timeLeft-counter),200,200);
   }
   setInterval(timeIt,1000);
}

function draw() {
   
}
