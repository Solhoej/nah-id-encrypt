class ImageProcessing
{
  constructor(Image1, Image2, x=0, y=0, w=width, h=height)
  {
    this.pos = createVector(x, y);
    this.Image1 = loadImage(Image1);
    this.Image2 = loadImage(Image2);
    this.w = w;
    this.h = h;
    this.Process = false;
  }
  
  setProcess(value=true)
  {
    this.Process = value;
    print(inputBox.value());
  }

  Images()
  {
    push();
    translate(this.pos.x, this.pos.y)
    image(this.Image1, 0, 0, this.w/2, this.h/2);
    image(this.Image2, 0, this.h/2, this.w/2, this.h/2);
    pop();
  }

  ImageWithText()
  {
    push();
    translate(this.pos.x, this.pos.y)
    image(this.Image1, 0, 0, this.w/2, this.h/2);
    //image(this.Image2, 0, this.h/2, this.w/2, this.h/2)

    if(inputBox.value().length < 10)
    {
      textSize(100);
    }
    else
    {
      textSize((this.Image1.width/4) / inputBox.value().length);
    }

    text(inputBox.value(), 0, 250);
    pop();
  }

  Subtract()
  {
    push();
    translate(width/2, height/4)
    rect(0, 0, width/2, height/2);

    pop();
  }

  Add()
  {
    push();
    translate(width/2, height/4)
    rect(0, 0, width/2, height/2);


    pop();
  }

  addText(What="Test", Where=this.Image1, x=0, y=0, w=64, h=16)
  {
    push();
    translate(Where.pos.x, Where.pos.y)

    pop();
  }
  
}