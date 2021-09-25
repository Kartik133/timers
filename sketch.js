var counter = 0,timeLeft = "s";
var y,x,interval,radar;

function preload() {
   radar = loadSound("Radar.mp3");
}

function convertSeconds(s) {
   var min = floor(s/60);
   var sec = s%60;
   return nf(min,2)+":"+nf(sec,2);
}
function timeIt() {
   if(timeLeft!=="s") {
    counter++;
    var timer = select("#timer");
    timer.html(convertSeconds(timeLeft-counter));
   }
   
   if(counter===timeLeft) {
      clearInterval(interval);
      radar.play();
   }
}
function setup() {
   y = createInput("seconds");
   x = createButton("DONE");
   y.position(200,200);
   x.position(200,130);
   
   interval = setInterval(timeIt,1000);
}

function draw() {
   x.mousePressed(()=>{
      x.hide();
      y.hide();
      
      timeLeft = int(y.value());
   });
}
