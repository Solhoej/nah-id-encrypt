let Machine;

function setup() 
{
  createCanvas(800, 800);

  inputBox = createInput('')
  inputBox.attribute('placeholder', 'type message in here')
  inputBox.size(400, 50);
  inputBox.position(10, 10);

  inputButton = createButton('Convert message');
  inputButton.size(200, 50);
  inputButton.position(10, 80);

  Machine = new ImageProcessing("Mirsad 1.jpg", "Mirsad 2.jpg")
}

function draw() 
{
  background(220);
  Machine.Original();
  Machine.Subtract();
}