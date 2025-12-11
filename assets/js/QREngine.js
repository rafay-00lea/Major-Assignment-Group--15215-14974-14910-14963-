/*
 * QREngine.js
 * Implements CLO 4: Object-Oriented Programming Principles
 */

class QREngine {
  constructor(elementId) {
    this.container = document.getElementById(elementId);
    this.qrCodeObj = null;
  }

  // Generates a new QR code
  generate(text, options) {
    this.container.innerHTML = ""; // Clear previous QR

    if (!text) {
      alert("Please enter text or URL");
      return;
    }

    // Create new QRCode instance
    this.qrCodeObj = new QRCode(this.container, {
      text: text,
      width: parseInt(options.size),
      height: parseInt(options.size),
      colorDark: options.color,
      colorLight: options.bgColor,
      correctLevel: QRCode.CorrectLevel.H
    });
  }

  // Downloads the generated QR code
  downloadQR(fileName = "qrcode.png") {
    const img = this.container.querySelector("img");
    if (img && img.src) {
      const link = document.createElement("a");
      link.href = img.src;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert("No QR code generated yet!");
    }
  }
}
