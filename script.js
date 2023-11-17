// Elementos del DOM
const countDisplay = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const resetButton = document.getElementById('reset');

let clickCount = 0;

// Counter increase
function incrementCounter() {
    clickCount++;
    countDisplay.textContent = clickCount;
}

// Restart function
function resetCounter() {
    clickCount = 0;
    countDisplay.textContent = clickCount;
}

// Click in buttons
incrementButton.addEventListener('click', incrementCounter);
resetButton.addEventListener('click', resetCounter);