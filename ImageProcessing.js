class ImageProcessing
{
  constructor(Image1, Image2, x=0, y=0, w=width/2, h=height/2)
  {
    this.pos = createVector(x, y);
    this.Image1 = loadImage(Image1);
    this.Image2 = loadImage(Image2);
    this.w = w;
    this.h = h;
    this.Process = false;
    this.img = createImage(101, 92);
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
    image(this.Image1, 0, 0, this.w, this.h);
    image(this.Image2, 0, height/2, this.w, this.h);
    this.img.loadPixels();
    this.Image1.loadPixels();
    this.Image2.loadPixels();
    pop();
  }

  ImageWithText()
  {
    push();
    translate(this.pos.x, this.pos.y)
    image(this.Image1, 0, 0, this.w, this.h);
    //image(this.Image2, 0, this.h/2, this.w/2, this.h/2)

    if(inputBox.value().length < 10)
    {
      textSize(100);
    }
    else
    {
      textSize((this.Image1.width/4) / inputBox.value().length);
    }
    //text(inputBox.value(), 0, 250);
    pop();
  }

  Subtract() {
    push();
    translate(width/2, height/4);
    rect(0, 0, width/2, height/2);

    for(let i = 0; i < this.Image1.pixels.length; i++)
    {
      this.img.pixels[i] = this.Image1.pixels[i] - this.Image2.pixels[i];
      this.img.pixels[i+1] = this.Image1.pixels[i+1] - this.Image2.pixels[i+1];
      this.img.pixels[i+2] = this.Image1.pixels[i+2] - this.Image2.pixels[i+2];
      this.img.pixels[i+3] = this.Image1.pixels[i+3] - this.Image2.pixels[i+3];
    }

    this.img.updatePixels();

    image(this.img, 0, 0, width/2, height/2);

    pop();
}

  Add() {
    push();
    translate(width/2, height/4);
    rect(0, 0, width/2, height/2);

    for(let i = 0; i < this.Image1.pixels.length; i++)
    {
      this.img.pixels[i] = this.Image1.pixels[i] + this.Image2.pixels[i];
      this.img.pixels[i+1] = this.Image1.pixels[i+1] + this.Image2.pixels[i+1];
      this.img.pixels[i+2] = this.Image1.pixels[i+2] + this.Image2.pixels[i+2];
      this.img.pixels[i+3] = this.Image1.pixels[i+3] + this.Image2.pixels[i+3];
    }

    this.img.updatePixels();

    image(this.img, 0, 0, width/2, height/2);

    pop();
}

Grayscale() {
  this.img.loadPixels();

  for (let i = 0; i < this.Image1.pixels.length; i += 4) {
    let r = this.Image1.pixels[i];
    let g = this.Image1.pixels[i+1];
    let b = this.Image1.pixels[i+2];

    let gray = (r + g + b) / 3;

    this.Image1.pixels[i] = gray;
    this.Image1.pixels[i+1] = gray;
    this.Image1.pixels[i+2] = gray;
  }

  this.Image1.updatePixels();
  image(this.Image1, 0, 0, width/2, height/2);
}

  getOriginalImageSize1()
  {
    this.OriginalImageSize1 = [this.Image1.width, this.Image1.height];
    this.OriginalImageSize2 = [this.Image2.width, this.Image2.height];
    return this.OriginalImageSize1 = [this.Image1.width, this.Image1.height];
  }

  getOriginalImageSize1()
  {
    this.OriginalImageSize1 = [this.Image1.width, this.Image1.height];
    this.OriginalImageSize2 = [this.Image2.width, this.Image2.height];
    return this.OriginalImageSize2 = [this.Image2.width, this.Image2.height];
  }

  addText(What="Test", Where=this.Image1, x=0, y=0, w=64, h=16)
  {
    push();
    translate(Where.pos.x, Where.pos.y)

    pop();
  }
  
}