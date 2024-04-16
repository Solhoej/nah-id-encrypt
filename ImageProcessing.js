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
    this.ColorInvertedImage = loadImage(Image1);
    this.w = w;
    this.h = h;
    this.Process = false;
    this.img = createImage(100, 100);
    this.imgTxt = createImage(100, 100);
    this.grayScaleVideo = createImage(100, 100);
    this.invertVideo = createImage(100, 100);
    this.AddVideo = createImage(100, 100);
    this.SubVideo = createImage(100, 100);
    this.invertedVideo = createImage(100, 100);
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
    this.ColorInvertedImage.loadPixels();
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
    translate(width/4, height/4)
    print("Rotating");

    let getRGBA;
    let rotation;

    for(let x = 0; x < this.RotatedImage.width; x++)
    {
      for(let y = 0; y < this.RotatedImage.height; y++)
      {
        getRGBA = this.getPixel(x, y);
        rotation = this.getRotation(x, y, getRGBA[0], getRGBA[1], getRGBA[2], getRGBA[3], theta);
      }
    }

    this.RotatedImage.updatePixels();
    image(this.RotatedImage, 0, 0, width/2, height/2);
    pop()
  }

  getRotation(x, y, r, g, b, a, theta=0)
  {
    let pixelLength = sqrt(x*x + y*y);
    let newAngle = atan(y/x);

    x = round(cos(newAngle) * pixelLength);
    y = round(sin(newAngle) * pixelLength);

    let pixelNum = (x + y * this.RotatedImage.width) * 4;
    this.RotatedImage.pixels[pixelNum] = r;
    this.RotatedImage.pixels[pixelNum + 1] = g;
    this.RotatedImage.pixels[pixelNum + 2] = b;
    this.RotatedImage.pixels[pixelNum + 3] = a;
  }

  getPixel(x, y)
  {
    let pixelNum = (x + y * this.RotatedImage.width) * 4
    let r = this.RotatedImage.pixels[pixelNum]
    let g = this.RotatedImage.pixels[pixelNum + 1]
    let b = this.RotatedImage.pixels[pixelNum + 2]
    let a = this.RotatedImage.pixels[pixelNum + 3]

    return[r, g, b, a];
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

    this.grayScaleVideo.resize(video.width, video.height);
    this.invertVideo.resize(video.width, video.height);
    this.AddVideo.resize(video.width, video.height);
    this.SubVideo.resize(video.width, video.height);
    this.Image1.resize(video.width, video.height);
    this.invertedVideo.resize(video.width, video.height);

    video.loadPixels();
    video.updatePixels();

    if(Selector2.value() == videoStates[0])
    {
      image(video, 0, 0, video.width, video.height);
    }
    else if(Selector2.value() == videoStates[1])
    {
      this.grayScaleVideo.loadPixels();
          //grayscale
      for(let i = 0; i < video.pixels.length; i += 4)
      {
        let r = video.pixels[i];
        let g = video.pixels[i+1];
        let b = video.pixels[i+2];
    
        let gray = (r + g + b) / 3;

        this.grayScaleVideo.pixels[i] = gray;
        this.grayScaleVideo.pixels[i+1] = gray;
        this.grayScaleVideo.pixels[i+2] = gray;
        this.grayScaleVideo.pixels[i+3] = 255;
      }
      this.grayScaleVideo.updatePixels();
      image(this.grayScaleVideo, 0, 0, video.width, video.height);
    }
    else if(Selector2.value() == videoStates[2])
    {
      this.invertVideo.loadPixels();
          //Invert
      for(let i = 0; i < video.pixels.length; i += 4)
      {

        this.invertVideo.pixels[i] = 255 - video.pixels[i]
        this.invertVideo.pixels[i+1] = 255 - video.pixels[i+1];
        this.invertVideo.pixels[i+2] = 255 - video.pixels[i+2];
        this.invertVideo.pixels[i+3] = 255;
      }
      this.invertVideo.updatePixels();
        image(this.invertVideo, 0, 0, video.width, video.height);
      }
    else if(Selector2.value() == videoStates[3])
    {
      this.AddVideo.loadPixels();
      //Add
      for(let i = 0; i < video.pixels.length; i += 4)
      {

        this.AddVideo.pixels[i] = this.Image1.pixels[i] + video.pixels[i]
        this.AddVideo.pixels[i+1] = this.Image1.pixels[i+1] + video.pixels[i+1]
        this.AddVideo.pixels[i+2] = this.Image1.pixels[i+2] + video.pixels[i+2]
        this.AddVideo.pixels[i+3] = 255;
      }
      this.AddVideo.updatePixels();
      image(this.AddVideo, 0, 0, video.width, video.height);
    }
    else if(Selector2.value() == videoStates[4])
    {
      this.SubVideo.loadPixels();
              //Sub
              for(let i = 0; i < video.pixels.length; i += 4)
              {
          
                this.SubVideo.pixels[i] = this.Image1.pixels[i] - video.pixels[i]
                this.SubVideo.pixels[i+1] = this.Image1.pixels[i+1] - video.pixels[i+1]
                this.SubVideo.pixels[i+2] = this.Image1.pixels[i+2] - video.pixels[i+2]
                this.SubVideo.pixels[i+3] = 255;
              }
              this.SubVideo.updatePixels();
      image(this.SubVideo, 0, 0, video.width, video.height);
    }
    else
    {
      this.invertedVideo.loadPixels();
                //Mirror
    for(let y = 0; y < video.height; y++)
    {
      for(let x = 0; x < video.width / 2; x++)
      {
        let leftPixel = (x + y * video.width) * 4;
        let rightPixel = ((video.width - x - 1) + y * video.width) * 4;

        for(let i = 0; i < 4; i++) {
          let temp = video.pixels[leftPixel + i];
          this.invertedVideo.pixels[leftPixel + i] = video.pixels[rightPixel + i];
          this.invertedVideo.pixels[rightPixel + i] = temp;
        }
      }
    }
    this.invertedVideo.updatePixels();
      image(this.invertedVideo, 0, 0, video.width, video.height);
    }

    pop();
  }

  invert() {
    push();
    translate(0, 0);
    this.Image1.loadPixels();
    this.ColorInvertedImage.loadPixels();
    for (let i = 0; i < this.ColorInvertedImage.pixels.length; i += 4) {
      this.ColorInvertedImage.pixels[i] = 255 - this.Image1.pixels[i];
      this.ColorInvertedImage.pixels[i + 1] = 255 - this.Image1.pixels[i + 1];
      this.ColorInvertedImage.pixels[i + 2] = 255 - this.Image1.pixels[i + 2];
    }
    this.Image1.updatePixels();
    this.ColorInvertedImage.updatePixels();
    image(this.ColorInvertedImage, 0, 0, width, height);
    pop();
  }

}