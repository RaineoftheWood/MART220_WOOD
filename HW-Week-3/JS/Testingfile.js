var timerValue = 10;
var startButton;
var img;
var timerValue = 10;
let myFont;
let bg;
let y = 0;

function preload() {
  myFont = loadFont('./Fonts/Qalisso.otf');
  //MART220_WOOD/HW-Week-3/Fonts/Qalisso.otf
  }
function setup() {
  createCanvas(900, 900);
  textAlign(CENTER);
  setInterval(timeIt, 1000);
  bg = loadImage('./Images/mustard-health-benefits-01.jpg');
  
  setInterval(timeIt, 1000);

}
function draw() {
  background(bg);
  fill(12,30,100);
  textFont(myFont);
  textSize(36);
  text('Im HERE PLS APPEAR', 10, 50);
  if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, height / 2);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2, height / 2);
  }
  if (timerValue == 0) {
    text('game over', 450, );
  }
  
 
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}