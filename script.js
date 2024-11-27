const banana = document.getElementById("banana");
const counterDisplay = document.getElementById("counter");
const resetButton = document.getElementById("reset");
const victoryMessage = document.getElementById("victoryMessage");

let clicks = parseInt(localStorage.getItem("clicks")) || 0;
let progress = clicks / 1000; 

updateBanana();
updateCounter();

banana.addEventListener("click", () => {
    if (clicks < 1000) {
        clicks++;
        progress = clicks / 1000;
        updateBanana();
        updateCounter();
        localStorage.setItem("clicks", clicks);

        if (clicks === 1000) {
            victoryMessage.textContent = "Victory! Your banana is golden!";
        }
    }
});

resetButton.addEventListener("click", () => {
    clicks = 0;
    progress = 0;
    updateBanana();
    updateCounter();
    localStorage.setItem("clicks", clicks);
    victoryMessage.textContent = ""; 
});

function updateBanana() {
    const brightness = 0.6 + progress * 1.4; 
    banana.style.filter = `brightness(${brightness})`;
}

function updateCounter() {
    counterDisplay.textContent = `Clicks: ${clicks}`;
}
