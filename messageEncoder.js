function messageEncoder() {
    let message = inputBox.value();

    if (message.trim() !== '') {
        let graphics = createGraphics(textWidth(message) * 20, 50);
        graphics.textSize(50);
        graphics.textAlign(LEFT, CENTER);
        graphics.fill(0);

        graphics.text(message, graphics.width / 2, graphics.height / 2);

        imgMessage = graphics.get();

        console.log("Image Width:", imgMessage.width);
        console.log("Image Height:", imgMessage.height);

        imgMessage.loadPixels();

        for (let i = 0; i < imgMessage.pixels.length; i += 4) {
            rValue = imgMessage.pixels[i];
            gValue = imgMessage.pixels[i + 1];
            bValue = imgMessage.pixels[i + 2];

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

        image(imgMessage, 10, 500);
    } else {
        console.log("Skriv noget i tekstfeltet");
    }
}