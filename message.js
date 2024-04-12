function messageEncoder()
{
    let message = inputBox.value();

    let graphics = createGraphics(textWidth(Machine.Image1.width), 50);
    graphics.textSize(message.length);
    graphics.textAlign(CENTER, CENTER);
    graphics.fill(0);

    graphics.text(text, graphics.width / 2, graphics.height / 2);

    imgMessage = graphics.get();
}