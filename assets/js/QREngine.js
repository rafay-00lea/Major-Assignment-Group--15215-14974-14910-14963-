/*
 * QREngine.js
 */

class QREngine {
  constructor(elementId) {
    this.container = document.getElementById(elementId);
    this.qrCodeObj = null;
}

}
generate(text, options) {
    // TODO: implement QR generation
    this.container.innerHTML = "";

    if (!text) {
    alert("Please enter text or URL");
    return;
}

}

this.qrCodeObj = new QRCode(this.container, {
    text: text,
    width: parseInt(options.size),
    height: parseInt(options.size),
    colorDark: options.color,
    colorLight: options.bgColor,
    correctLevel: QRCode.CorrectLevel.H
});

downloadQR(fileName = "qrcode.png") {
    // TODO
}

