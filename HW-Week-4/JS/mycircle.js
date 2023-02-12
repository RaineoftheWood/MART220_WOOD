class mycircle{
//constructor 
constructor(x, y, diameter, redColor, greenColor, blueColor){
this.x = x 
this.y = y
this.diameter = diameter
this.redColor = redColor;
this.greenColor = greenColor;
this.blueColor = blueColor;
}
//properties 

//functions 
draw()
{
    fill(this.redColor, this.greenColor, this.blueColor);
    circle(this.x,this.y,this.diameter);
}
}