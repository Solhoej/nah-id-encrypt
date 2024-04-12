class ImageProcessing
{
  constructor(Image1, Image2, x=0, y=0, w=width, h=height)
  {
    this.pos = createVector(x, y);
    this.Image1 = loadImage("Images/"+Image1);
    this.Image2 = loadImage("Images/"+Image2);    
    this.w = w;
    this.h = h;
  }
  
  Original()
  {
    push();
    translate(this.pos.x, this.pos.y)
    image(this.Image1, 0, 0, this.w/2, this.h/2)
    image(this.Image2, 0, this.h/2, this.w/2, this.h/2)
    pop();
  }

  Subtract()
  {
    
  }
  
}