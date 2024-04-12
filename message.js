function messageEncoder()
{
    let message = inputBox.value();

    let graphics = createGraphics(textWidth(message), 50);
    if(inputBox.value().length < 10)
    {
        graphics.textSize(100);
    }
    else
    {
        graphics.textSize((Machine.Image1.width/4) / inputBox.value().length);
    }
    graphics.textAlign(CENTER, CENTER);
    graphics.fill(0);
    
    graphics.text(text, graphics.width / 2, graphics.height / 2);

    imgMessage = graphics.get();
}