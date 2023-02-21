var pumpAnimation; 
//var pumpWalkAnimation;
var i = 0;
var j = 0; 
var idlePaths = [];
//var runPaths = [];
//var walkAnimations = [];
function preload (){ 
  idlePaths = loadStrings("./Images/Idle/idlePump.txt");
}
function setup(){ 
  createCanvas(900,900);
  pumpAnimation = new animateCharacter(idlePaths, 450, 500, 150, 170);
  //pumpWalkAnimation = new animateCharacter(runPaths, 450, 500, 150, 170);
}
function draw(){
  background(220)
  /*if(keyIsPressed){ 
    if(key == 'd'){
      pumpWalkAnimation.setCurrentFrameCount(frameCount);
      pumpWalkAnimation.drawAnimation();
      pumpWalkAnimation.updatePosition('forward');
      pumpAnimation.updatePosition('forward');
    }
    else if( key == 'a'){
      pumpWalkAnimation.setCurrentFrameCount(frameCount);
      pumpWalkAnimation.drawAnimation();
      pumpWalkAnimation.updatePosition('reverse');
      pumpAnimation.updatePosition('reverse');
    }
    else {
      pumpAnimation.updatePosition('idle');
      pumpAnimation.setCurrentFrameCount(frameCount);
      pumpAnimation.drawAnimation();
    }
  }
  else{
    pumpAnimation.setCurrentFrameCount(frameCount);
    pumpAnimation.drawAnimation();
  }*/
}
