var mySound;
function preload() {
  //create a simple sound 
 mySound = loadSound("SOUNDS/Squrel Impression.wav");
}

function setup() {
  createCanvas(100, 100);
  
}

function mousePressed() {
    background(20,100,90);
  //playing a sound file on a user gesture
 
  mySound.play();
}
