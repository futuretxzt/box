var box1, box2
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(10,100,50,50)
  box2=new Box(5,50,25,25)
}

function draw() 
{
  background(220);
box1.display()
box2.display()
}

