class ImageProcessing
{
  constructor(Image1, Image2, x=0, y=0, w=width/2, h=height/2)
  {
    this.images = [];
    this.pos = createVector(x, y);
    this.Image1 = loadImage(Image1);
    this.Image2 = loadImage(Image2);
    this.Image1Gray = loadImage(Image1);
    this.ImageBlackline = loadImage(Image1);
    this.InvertedImage = loadImage(Image1);
    this.RotatedImage = loadImage(Image1);
    this.w = w;
    this.h = h;
    this.Process = false;
    this.img = createImage(100, 100);
    this.imgTxt = createImage(100, 100);
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


    this.img.resize(this.Image1.width, this.Image1.height);
    this.imgTxt.resize(this.Image1.width, this.Image1.height);
    this.Image2.resize(this.Image1.width, this.Image1.height);

    image(this.Image1, 0, 0, this.w, this.h);
    image(this.Image2, 0, height/2, this.w, this.h);
    this.img.loadPixels();
    this.imgTxt.loadPixels();
    this.Image1.loadPixels();
    this.Image2.loadPixels();
    this.Image1Gray.loadPixels();
    this.ImageBlackline.loadPixels();
    this.RotatedImage.loadPixels();
    pop();
  }

  ImageWithText()
  {
    push();
    translate(this.pos.x, this.pos.y)
    image(this.Image1, 0, 0, this.w, this.h);
    //image(this.Image2, 0, this.h/2, this.w/2, this.h/2)

    let newImage = this.messageEncoder()

    if(inputBox.value().length < 10)
    {
      textSize(100);
    }
    else
    {
      textSize((this.Image1.width/4) / inputBox.value().length);
    }
    //text(inputBox.value(), 0, 250);

    for(let i = 0; i < this.Image1.pixels.length; i += 4)
    {
      if(newImage == false)
      {
        this.imgTxt.pixels[i] = this.Image1.pixels[i]
        this.imgTxt.pixels[i+1] = this.Image1.pixels[i+1]
        this.imgTxt.pixels[i+2] = this.Image1.pixels[i+2]
        this.imgTxt.pixels[i+3] = this.Image1.pixels[i+3]
      }
      else
      {
        this.imgTxt.pixels[i] = this.Image1.pixels[i] - newImage.pixels[i];
        this.imgTxt.pixels[i+1] = this.Image1.pixels[i+1] - newImage.pixels[i+1];
        this.imgTxt.pixels[i+2] = this.Image1.pixels[i+2] - newImage.pixels[i+1];
        this.imgTxt.pixels[i+3] = this.Image1.pixels[i+3] - newImage.pixels[i+1];
      }
    }

    this.imgTxt.updatePixels();

    image(this.imgTxt, 0, height/2, this.w, this.h);

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
    let r = this.Image1Gray.pixels[i];
    let g = this.Image1Gray.pixels[i+1];
    let b = this.Image1Gray.pixels[i+2];

    let gray = (r + g + b) / 3;

    this.Image1Gray.pixels[i] = gray;
    this.Image1Gray.pixels[i+1] = gray;
    this.Image1Gray.pixels[i+2] = gray;
  }

  this.Image1Gray.updatePixels();
  image(this.Image1Gray, 0, 0, width/2, height/2);
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

  addText(What, Where=this.Image1, x=0, y=0, w=64, h=16)
  {
    push();
    translate(Where.pos.x, Where.pos.y)

    pop();
  }

  Blackline(where = this.ImageBlackline.width/2, newW=10)
  {
    push();
    translate(0, 0);
    this.ImageBlackline.loadPixels();

    for(let i = 0; i < this.ImageBlackline.pixels.length; i += where * 4)
    {
      for(let j = 0; j < newW; j += 4)
      {
        this.ImageBlackline.pixels[i+j] = 0
        this.ImageBlackline.pixels[i+j+1] = 0
        this.ImageBlackline.pixels[i+j+2] = 0
      }
    }

    this.ImageBlackline.updatePixels();
    image(this.ImageBlackline, 0, 0, width/2, height/2);
    pop();
  }

  myGetPixel()
  {
    let x;
    let y;

    return [x, y]
  }

  mirror()
  {
    push();
    translate(0, 0);
    this.InvertedImage.loadPixels();

    for(let y = 0; y < this.Image1.height; y++)
    {
      for(let x = 0; x < this.Image1.width / 2; x++)
      {
        let leftPixel = (x + y * this.Image1.width) * 4;
        let rightPixel = ((this.Image1.width - x - 1) + y * this.Image1.width) * 4;

        for(let i = 0; i < 4; i++) {
          let temp = this.Image1.pixels[leftPixel + i];
          this.InvertedImage.pixels[leftPixel + i] = this.Image1.pixels[rightPixel + i];
          this.InvertedImage.pixels[rightPixel + i] = temp;
        }
      }
    }

    this.InvertedImage.updatePixels();
    image(this.Image1, 0, 0, width/2, height/2);
    image(this.InvertedImage, 0, height/2, width/2, height/2);

    pop();
  }

  rotate(theta=5)
  {
    push()

    let Pos = this.getRotation(theta);

    let xRot = Pos[0];
    let yRot = Pos[1];

    translate(width/4, height/4)
    this.RotatedImage.loadPixels();

    this.RotatedImage.updatePixels();
    image(this.RotatedImage, xRot, yRot, width/2, height/2);
    pop()
  }

  getRotation(theta=5)
  {
    let xRot;
    let yRot;

    for(let y = 1; y < this.RotatedImage.height; y++)
    {
      for(let x = 1; x < this.RotatedImage.width; x++)
      {
        let pixelLength = sqrt(x*x + y*y);
        let pixelVink = atan(y/x);

        let pixelRotate = pixelVink + theta;
        
        xRot = cos(pixelRotate) * pixelLength;
        yRot = sin(pixelRotate) * pixelLength;

        print(pixelVink);
      }

      return [xRot, yRot];
    }
  }
  
  messageEncoder() {
    let message = inputBox.value();

    if (message.trim() !== '') {
        let graphics = createGraphics(textWidth(message) * 20, 50);
        graphics.textSize(50);
        graphics.textAlign(LEFT, CENTER);
        graphics.fill(0);

        graphics.text(message, 0, 25);

        let imgMessage = graphics.get();

        console.log("Image Width:", imgMessage.width);
        console.log("Image Height:", imgMessage.height);

        imgMessage.width = this.img.width;
        imgMessage.height = this.img.height;

        imgMessage.loadPixels();

        for (let i = 0; i < imgMessage.pixels.length; i += 4) {
            let rValue = imgMessage.pixels[i];
            let gValue = imgMessage.pixels[i + 1];
            let bValue = imgMessage.pixels[i + 2];

            if (
                rValue != 255 &&
                gValue != 255 &&
                bValue != 255
            ) {
                imgMessage.pixels[i] = 1;
                imgMessage.pixels[i + 1] = 1;
                imgMessage.pixels[i + 2] = 1;
            }
        }

        imgMessage.updatePixels();

        // Assign imgMessage to imgTxt
        this.imgTxt = imgMessage;

        return imgMessage;

    } else {
        console.log("Skriv noget i tekstfeltet");
    }

    return false;
}

  Webcam(video)
  {
    push();
    video.loadPixels();

    video.updatePixels();
    image(video, 0, 0, video.width, video.height);
    pop();
  }
}