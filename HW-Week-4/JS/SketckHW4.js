var x1 = 300; 
var y1 = 20 ;
var x2 = 100;
var y2 = 100;
var x3 = 100;
var y3 = 100; 
var x4 = 300;
var y4 = 10;
var w = 25;
var yChange = 5;
var r1 = 10;
var r2 = 15;
var r3 = 12;
var r4 = 20;
var timerValue = 10;
var startButton;
let bg;
let myFont; 
// all these variables are for my shapes and one width variable w/ w 
function preload(){
    myFont = loadFont('./Fonts/Qalisso.otf');
}
function setup() {
    createCanvas(400, 400);
    bg = loadImage('./Images/hot_dog.jpg');
    for(var i = 0; i < 10; i++)
        {
            
            circle(x4,y4,w);
            x4+=random(50);
            y4+=random(50);
        }
   // random things that appear at the beginning, its really confusing 
  }
  
  function draw() {
    let c = color(255, 210, 20);
  let v = color( 244, 10, 20 );
  let b = color(255, 200, 255 );
  let x = color(2, 150, 50);
  // colors woohooo
    background(bg);
   // background above
    fill(x);
    square(-1,170, 409);
    fill(b);
    ellipse(200, 240, 233, 96);
    fill(c);
    ellipse(200, 230, 175, 71);
    fill(v);
    ellipse(200, 225, 150, 45);
    fill(c);
     ellipse(200, 240, 180, 50);
    fill(b);
    line(190, 205, 200, 215);
    line(170, 205, 180, 215);
    line(150, 210, 160, 217);
    line(210, 205, 220, 215);
    // Hotdog is above here 
    fill(c);
    triangle(17, 20, 107, 20, 62, -25);
    rect(12, 20, 100, 180);
    ellipse(62, 200, 100, 20);
    ellipse(62, 20, 100, 20);
     ellipse(62, 15, 77, 10);
     //my mustard boy above 
    fill(v);
    text( "Mustard", 40, 50);
    text("& Hotdog", 36, 90);
    fill(c);
    textFont(myFont);
    textSize(36);
    text( "Raine Wood",300, 390);
    // this is my text above
    circle( x1, y1, r1);
    circle( 55, y2, r2);
    circle( 78, y1, r3);
    circle( 150, y2, r4);
    fill(v); 
    createsquare(300, 20, 24);

    // mustard drops 
     
    y2+=random(12);
    // variable of movement 
    if (y1 >= height -  (r1/2) || y1 <= (r1/2) ){
        yChange *= -1
    }
    {
        y1+=yChange;
    }
    if (y1 >= height -  (r2/2) || y1 <= (r2/2) ){
        yChange *= -.91
    }
    {
        y1+=yChange;
    }
    // Bouncing that is very scary 
    if (y2 > 400 || y2 < 0)
    {
        (y2 = 5 )
    }
    //looping above 
    circle(x3, y3, 25);
    // mustard ball movement, and its self
    if(keyIsPressed)
    {
      if(key == 'a')
      {
          x3-=3;
      }
  
      else if(key == 'd')
      {
          x3+=3;
      }
      else if(key == 'w')
      {
          y3-=3;
      }
      else if(key == 's')
      {
          y3+=3;
      }

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
    if (timerValue >= 10) {
        text("0:" + timerValue, width / 2, height / 2);
      }
      if (timerValue < 10) {
        text('0:0' + timerValue, width / 2, height / 2);
      }
      if (timerValue == 0) {
        text('game over', width / 2, height / 2 + 15);
      }
      
      function timeIt() {
        if (timerValue > 0) {
          timerValue--;
        }

    }
    function createsquare(s,d,f)
    {
        square(s,d,f);
    }
    function boundaries()
    {
        if( x3 < 0 )
        {
            x3 = 400; 
    
        }
        else if( x3 > 400)
        { 
            x3 = 0; 
        }

        if( y3 < 0 )
        { 
        y3 = 400; 
        }
        else if ( y3 > 400)
        {
            y3 = 0; 
        }
    }
    

}
    