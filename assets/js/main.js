// assets/js/main.js
// Empty file for initial commit
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
