/*
 * main.js
 * Handles DOM events and Data Persistence (Local Storage).
 */
// 1. Initialize the QREngine Class
const qrEngine = new QREngine("qr-output");


// 2. Select DOM Elements
const textInput = document.getElementById("qr-text");
const colorInput = document.getElementById("qr-color");
const bgInput = document.getElementById("qr-bgcolor");
const sizeInput = document.getElementById("qr-size");
const generateBtn = document.getElementById("generate-btn");
const downloadBtn = document.getElementById("download-btn");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");


// 3. Load History from Local Storage on Page Load
document.addEventListener("DOMContentLoaded", loadHistory);


// 4. Generate Button Click Event
generateBtn.addEventListener("click", () => {
    const text = textInput.value.trim();
    if(!text) return;

    const options = {
        color: colorInput.value,
        bgColor: bgInput.value,
        size: sizeInput.value
    };

    qrEngine.generate(text, options);
    downloadBtn.disabled = false;
    addToHistory(text);
});

// 5. Download Button Click Event
downloadBtn.addEventListener("click", () => {
    qrEngine.downloadQR("my-qr-code.png");
});


function addToHistory(text) {
    let history = JSON.parse(localStorage.getItem("qr_history")) || [];
    if (history.length > 0 && history[0] === text) return;
    history.unshift(text);
    if (history.length > 5) history.pop();
    localStorage.setItem("qr_history", JSON.stringify(history));
    renderHistory();
}
