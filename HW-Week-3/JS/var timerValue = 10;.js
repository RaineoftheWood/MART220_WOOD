var timerValue = 10;
var startButton;
var img;
var mycirclex
var x,y, diameter
let myFont;
function preload() {
  img = loadImage('./Images/mustard-health-benefits-01.jpg');

  myFont = loadFont('./Fonts/Qalisso.otf');
  //MART220_WOOD/HW-Week-3/Fonts/Qalisso.otf
  }
function setup() {
  createCanvas(900, 900);
  textAlign(CENTER);
  setInterval(timeIt, 1000);
  fill(12,30,100);
  textFont(myFont);
  textSize(36);
  text('Im HERE PLS APPEAR', 10, 50);
  mycirclex = new mycircle();

  //array
  for(var i = 0; i < 5; i++ ){
    mycirclex = new mycircle(random(5,width), random(5, height),random(1,33));
    circle[i] = mycirclex(); 

  }
}
function draw() {
  background(220);
  mycirclex.drawcircle
  
  for(var i = 0; i < 5; i++ ){
    mycirclex = new mycircle(random(5,width), random(5, height),random(1,33));
    circle[i] = mycirclex(); 

  
  if (timerValue >= 10) {
    text("0:" + timerValue, width / 2, height / 2);
  }
  if (timerValue < 10) {
    text('0:0' + timerValue, width / 2, height / 2);
  }
  if (timerValue == 0) {
    text('game over', width / 2, height / 2 + 15);
  }
  image(img, 40, 60);
  fill(12,30,100);
  textSize(36);
  text('Im HERE PLS APPEAR', 400, 50);
}

function timeIt() {
  if (timerValue > 0) {
    timerValue--;
  }
}