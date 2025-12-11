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
    
    if(!text) return; // Stop if empty

    const options = {
        color: colorInput.value,
        bgColor: bgInput.value,
        size: sizeInput.value
    };

    // Call the OOP Method
    qrEngine.generate(text, options);
    
    // Enable download button
    downloadBtn.disabled = false;

    // Save to History (Data Handling)
    addToHistory(text);
});

// 5. Download Button Click Event
downloadBtn.addEventListener("click", () => {
    qrEngine.downloadQR("my-qr-code.png");
});

// --- Helper Functions for Data Handling ---

function addToHistory(text) {
    // Get existing history or empty array
    let history = JSON.parse(localStorage.getItem("qr_history")) || [];
    
    // Prevent duplicate consecutive entries
    if (history.length > 0 && history[0] === text) return;

    // Add new item to the beginning
    history.unshift(text);

    // Keep only last 5 items
    if (history.length > 5) history.pop();

    // Save back to Local Storage
    localStorage.setItem("qr_history", JSON.stringify(history));

    // Update UI
    renderHistory();
}

function loadHistory() {
    renderHistory();
}

function renderHistory() {
    let history = JSON.parse(localStorage.getItem("qr_history")) || [];
    historyList.innerHTML = ""; // Clear list

    history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        // Feature: Click history item to refill input
        li.addEventListener("click", () => {
            textInput.value = item;
        });
        historyList.appendChild(li);
    });
}

// 6. Clear History Event
clearHistoryBtn.addEventListener("click", () => {
    localStorage.removeItem("qr_history");
    renderHistory();
});