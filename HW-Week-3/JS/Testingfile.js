var timerValue = 10;
var startButton;
let myFont;
function preload() {
    myFont = loadFont('Fonts/Qalisso.otf');
  }
  
function setup() {
  createCanvas(900, 900);
  textAlign(CENTER);
  setInterval(timeIt, 1000);
  fill(12,30,100);
  textFont(myFont);
  textSize(36);
  text('Im HERE PLS APPEAR', 10, 50);
}
function draw() {
  background(220);
  if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, height / 2);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2, height / 2);
  }
  if (timerValue == 0) {
    text('game over', width / 2, height / 2 + 15);
  }
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}