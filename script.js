const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

music.volume = 0.2;

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.textContent = "🔇 Музыка өшіру";
    } else {
        music.pause();
        musicBtn.textContent = "🎵 Музыка қосу";
    }
});

const eventDate = new Date("March 6, 2026 13:20:00").getTime();
const countdown = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML =
        days + " күн " +
        hours + " сағат " +
        minutes + " минут " +
        seconds + " секунд";
}, 1000);
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";
    

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 400);