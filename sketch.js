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
   createCanvas(windowWidth,windowHeight);
   
   if(timeLeft==="s") {
      textSize(50);
      fill(0);
      text("Seconds",width/2-100,height/2-40);
   }
   
   y = createInput("");
   x = createButton("DONE");
   y.position(width/2-100,height/2);
   x.position(width/2-50,height/2+100);
   y.style("height","30px");
   x.style("width","50px");
   x.style("height","40px");
   interval = setInterval(timeIt,1000);
}

function draw() {
   x.mousePressed(()=>{
      x.hide();
      y.hide();
      
      timeLeft = int(y.value());
   });
}
