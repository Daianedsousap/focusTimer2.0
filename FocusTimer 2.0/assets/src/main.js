let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;

const minutesDisplay = document.getElementById('#minutes');
const secondsDisplay = document.getElementById('#seconds');

document.getElementById('.ph ph-play-circle').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    isRunning = false;
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
            updateDisplay();
        }, 1000);
    }
});

document.getElementById('.ph ph-stop-circle').addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

document.getElementById('.ph ph-increase-circlee').addEventListener('click', () => {
    minutes += 5;
    updateDisplay();
});

document.getElementById('ph ph-decrease-circle').addEventListener('click', () => {
    if (minutes >= 5) {
        minutes -= 5;
    }
    updateDisplay();
});

function updateDisplay() {
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
}

const sounds = {
    forest: new Audio('https://drive.google.com/uc?export=download&id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA'),
    rain: new Audio('https://drive.google.com/uc?export=download&id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2'),
    cafe: new Audio('https://drive.google.com/uc?export=download&id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA'),
    fireplace: new Audio('https://drive.google.com/uc?export=download&id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB')
};

document.querySelectorAll('#icons').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('#icons').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        Object.values(sounds).forEach(sound => sound.pause());
        sounds[card.id].play();
    });
});