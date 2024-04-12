let Machine;

function setup() 
{
  createCanvas(800, 800);
  Machine = new ImageProcessing("Mirsad 1.jpg", "Mirsad 2.jpg")
}

function draw() 
{
  background(220);
  Machine.Original();
  Machine.Subtract();
}