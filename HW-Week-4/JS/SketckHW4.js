var pumpkin;
var character = [];
var idleAnimation = [];
var i = 0; 
var x = 0;

function preload(){
pumpkin = new CharacterPump('./Images/png/Idle (1).png', 450, 450);
idleAnimation[0] = pumpkin;
pumpkin = new CharacterPump('./Images/png/Idle (2).png', 450, 450);
idleAnimation[1] = pumpkin;
for (var i = 0; i < character.length; i++) {
  idleAnimation[i] = idleAnimation[i].getImage();
}
}
function setup(){
createCanvas(900, 900);
setInterval(incrementIndex, 50);
}
function draw(){
  background(120);
  image(character[i], idleAnimation[i].getX(), idleAnimation[i].getY());
  pumpkinCharacter.animate();
}

function incrementIndex(){
     // increment the index
     i += 1;

     // if we reach the end of the array, start over
     if (i >= character.length) {
         i = 0;
     }
}