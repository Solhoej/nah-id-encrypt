let Machine;

let States = [
  "Add 2 Images",
  "Subtract 2 Images",
  "Add 1 Image and 1 text",
]

function setup() 
{
  createCanvas(800, 800);

  Machine = new ImageProcessing("Images/Mirsad 1.jpg", "Images/Mirsad 2.jpg")

  Selector = createSelect()
  
  for(let i = 0; i < States.length; i++)
  {
    Selector.option(States[i]);
  }

  inputBox = createInput('')
  inputBox.attribute('placeholder', 'type message in here')
  inputBox.style('font-size', '24px');
  inputBox.style('text-align', 'left')
  inputBox.size(400, 50);
  inputBox.position(10, 10);
  inputBox.hide()

  inputButton = createButton('Convert message');
  inputButton.size(200, 50);
  inputButton.style('font-size', '20px')
  inputButton.position(10, 80);
  inputButton.hide()
  inputButton.mousePressed(Machine.setProcess)
}

function showUi(truefalse)
{
  if(truefalse == true)
  {
    inputBox.show()
    inputButton.show()
  }
  else if(truefalse == false)
  {
    inputBox.hide()
    inputButton.hide()
  }
}


function draw() 
{
  background(220);

  for(let i = 0; i < States.length; i++)
  {
    switch(Selector.value())
    {
      case States[0]: 
      Machine.Images();
      Machine.Add();
      showUi(false);
        break;
      case States[1]: 
      Machine.Images();
      Machine.Subtract();
      showUi(false);
        break;
      case States[2]:
      Machine.ImageWithText();
      showUi(true);
        break;
    }
  }
}