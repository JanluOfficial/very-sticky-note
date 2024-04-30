// renderer.js
const { remote } = require('electron');
const { BrowserWindow } = remote;

const titleBar = document.querySelector('.title-bar');
const exitButton = document.getElementById('exitButton');

// Initialize drag variables
let isDragging = false;
let offsetX, offsetY;

titleBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    const bounds = BrowserWindow.getFocusedWindow().getBounds();
    offsetX = e.clientX - bounds.x;
    offsetY = e.clientY - bounds.y;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const newX = e.clientX - offsetX;
        const newY = e.clientY - offsetY;
        BrowserWindow.getFocusedWindow().setPosition(newX, newY);
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

exitButton.addEventListener('click', (e) => {
    console.warn("Exiting now...")
    w.close();
});