function messageEncoder()
{
    let message = inputBox.value();

    let graphics = createGraphics(textWidth(message), 50);
    graphics.textSize(20);
    graphics.textAlign(CENTER, CENTER);
    graphics.fill(0);

    graphics.text(text, graphics.width / 2, graphics.height / 2);

    imgMessage = graphics.get();
}