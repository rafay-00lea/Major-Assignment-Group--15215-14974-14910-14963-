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
