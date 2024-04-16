let Machine;

let States = [
  "Add 2 Images",
  "Subtract 2 Images",
  "Add 1 Image and 1 text",
  "Grayscale",
  "Blackline",
  "Invert",
  "Rotate",
]

function setup() 
{
  createCanvas(800, 800);
  angleMode(DEGREES);
  Machine = new ImageProcessing("Images/Sten.png", "Images/tester.png");

  Selector = createSelect();
  
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

  textX = createSlider(0, width/2, 0, 1);
  textY = createSlider(0, height/2, 0, 1);
  textY.style('transform', 'rotate(270deg)');

  textX.position(212,height+75);
  textY.position(130,height-12);

  textX.hide();
  textY.hide();

  vinkelSlider = createSlider(0, 360, 0, 1);
  vinkelSlider.hide();

}

function showUi(truefalse)
{
  if(truefalse == true)
  {
    inputBox.show()
    inputButton.show()
    textY.show();
    textX.show();
  }
  else if(truefalse == false)
  {
    inputBox.hide()
    inputButton.hide()
    textY.hide();
    textX.hide();
    vinkelSlider.hide();
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
      case States[3]:
      Machine.Grayscale();
      showUi(false);
        break;
      case States[4]:
        Machine.Blackline();
        showUi(false);
          break;
      case States[5]:
        Machine.invert();
        showUi(false);
          break;
      case States[6]:
        Machine.rotate(vinkelSlider.value());
        showUi(false);
        vinkelSlider.show();
          break;
    }
  }

}