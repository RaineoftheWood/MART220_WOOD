//Variables 
var r1;
    var r2;
var myAnimation;
var myWalkAnimation;
//changing variables for animations and movement
var i = 0;
var j = 0;
//Arrays for multitude of constant variables
var idlePaths = [];
var walkPaths = [];
var walkanimations = [];
var isColliding = false; 
var mySound;
var mySound2;
var mySound3;
function preload() {
    idlePaths = loadStrings("./IMAGES/idle/characterIdle.txt");
    walkPaths = loadStrings("./IMAGES/walk/characterWalk.txt");
    mySound = loadSound("./SOUNDS/Flower song.mp3")
    mySound2 = loadSound("./SOUNDS/GLitch kick.wav")
    mySound3 = loadSound("./SOUNDS/Squrel Impression.wav")
}
function setup(){
     r1 = new rectangle(100,459,20,40);
     r2 = new rectangle(750,450,100,50);
    createCanvas(900,900);
    myAnimation = new animationImageHW5(idlePaths, 400, 400, 150, 150); 
    myWalkAnimation = new animationImageHW5( walkPaths, 400, 400, 150, 150);

}
function draw(){
    background( 20, 100, 233);
    let c = color(0, 200, 33);
    fill (c);
    rect(0, 475, 920, 500);
    let y = color(255, 200, 0);
    fill (y);
    circle(600, 70, 55);
    let u = color(190,20,190);
    fill (u);
    r1.draw();
    fill (c);
    r2.draw();
    fill(y);
    text("Burger", 780, 480);
    textSize(32);
    text(isColliding, 450, 200 );
    if(keyIsPressed)
    {
        if(key == 'd')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
            isColliding = myWalkAnimation.isRectanglesColliding(r2);
            myWalkAnimation.updatePosition('forward');
            myAnimation.updatePosition('forward');
        }
        else if(key == 'a')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
            isColliding = myWalkAnimation.isRectanglesColliding(r1);
            myWalkAnimation.updatePosition('reverse');
            myAnimation.updatePosition('reverse');
        }
        else
        {
            myAnimation.updatePosition('idle');
            myAnimation.setCurrentFrameCount(frameCount);
            myAnimation.drawAnimation();
       
        }
    }
    else
    {
        myAnimation.setCurrentFrameCount(frameCount);
        myAnimation.drawAnimation();
       
    }
   
   
 
    
  //r1.draw();
  //r2.draw();
 //  text(isRectanglesColliding(r1,r2), 300,300);
  
}

/*function isRectanglesColliding(rec1, rec2){
    var topEdge1 = rec1.getY() + rec1.getH();
    var rightEdge1 = rec1.getX() + rec1.getW(); 
    var leftEdge1 = rec1.getX();
    var bottomEdge1 = rec1.getY();
    var topEdge2 = rec2.getY() + rec2.getH();
    var rightEdge2 = rec2.getX() + rec2.getW(); 
    var leftEdge2 = rec2.getX();
    var bottomEdge2 = rec2.getY();   
    
    if( leftEdge1 < rightEdge2 && rightEdge1 > leftEdge2 && bottomEdge1 < topEdge2 && topEdge1 > bottomEdge2){
        return true; 
   }
   return false;
}*/
function mousePressed(){
    mySound.play();
}