var hor,min,sec;
var gameState = "start";
var horInput,minInput,secInput,start;
var hr,minu,seco;
var timerHr,timerMn,timerSc;
var hr3,min3,sec3

function setup() {
   createCanvas(400,400);
}

function draw() {
   if(gameState==="start") {
     horInput = createInput("00");
     minInput = createInput("00");
     secInput = createInput("00");
     start = createButton("start");
     horInput.position(200,200);
     minInput.position(200,250);
     secInput.position(200,300);
     start.position(200,350);
     start.mousePressed(()=>{
        hor = hour();
        min = minute();
        sec = second();
        horInput.hide();
        minInput.hide();
        secInput.hide();
        start.hide();
        gameState = "start2";
     })
   }

   if(gameState==="start2") {
      text(hor,150,150);
      text(min,180,150);
      text(sec,210,150);
      horInput.hide();
      minInput.hide();
      secInput.hide();
      start.hide();
      hr = hour();
      minu = minute();
      seco = second();
      hr3 = horInput.value() + hor;
      min3 = minInput.value() + min;
      sec3 = secInput.value() + sec;
      timerHr = hr3-hr;
      timerMn = min3-minu;
      timerSc = sec3-seco;
      textSize(30);

      text(timerHr + " : " + timerMn + " : " + timerSc,200,200);
   }
}