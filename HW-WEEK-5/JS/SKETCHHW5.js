//Variables 
var myAnimation;
var myWalkAnimation;
//changing variables for animations and movement
var i = 0;
var j = 0;
//Arrays for multitude of constant variables
var idlePaths = [];
var walkPaths = [];
var walkanimations = [];
function preload() {
    idlePaths = loadStrings("./IMAGES/idle/characterIdle.txt");
    walkPaths = loadStrings("./IMAGES/walk/characterWalk.txt");
}
function setup() {
    createCanvas(900,900)
    myAnimation = new animationImageHW5(idlePaths, 400, 400, 150, 150); 
    myWalkAnimation = new animationImageHW5( walkPaths, 400, 400, 150, 150);
}
function draw() { 
    background( 20, 100, 233);
    let c = color(0, 200, 33);
    fill (c);
    rect(0, 475, 920, 500);
    let y = color(255, 200, 0);
    fill (y);
    circle(600, 70, 55);
    if(keyIsPressed)
    {
        if(key == 'd')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
            myWalkAnimation.updatePosition('forward');
            myAnimation.updatePosition('forward');
        }
        else if(key == 'a')
        {
            myWalkAnimation.setCurrentFrameCount(frameCount);
            myWalkAnimation.drawAnimation();
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

}