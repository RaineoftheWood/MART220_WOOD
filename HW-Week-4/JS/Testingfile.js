class People { 
  constructor(name, height, weight, tone, sex){
      this.name = name;
      this.height = height; 
      this.weight = weight;
      this.tone = tone; 
      this.sex = sex; 
  }
  walk(){ 
      text(this.name + " Is Walking.", 200, 200);
  }
  Look(){
      text(this.name + " Is Looking.", 100, 100);
  }
}
//stinko and clem are my people.
var stinko = new People("Stinko", 70, 150,"purple", "femme");
var clem = new People("Clem", 66, 130, "green", "homme");
function setup()
{
  createCanvas(800,600);
}

function draw()
{
  background(0);
  fill(255);
  //stinko and clem should probably be walking and looking. 
  clem.Look();
  stinko.walk();
}