function messageEncoder() {
    let message = inputBox.value();

    if (message.trim() !== '') {
        let graphics = createGraphics(textWidth(message), 50);
        graphics.textSize(10);
        graphics.textAlign(CENTER, CENTER);
        graphics.fill(0);

        graphics.text(message, graphics.width / 2, graphics.height / 2);

        imgMessage = graphics.get();

        console.log("Image Width:", imgMessage.width);
        console.log("Image Height:", imgMessage.height);

        image(imgMessage, 10, 500);
    } else {
        console.log("Input box is empty");
    }
}