// Pause / Play
let isRunning = true;

const toggleBtn = document.getElementById("toggle");
toggleBtn.onclick = () => {
    isRunning = !isRunning;

    document.documentElement.style.setProperty(
        "--animation-play-state",
        isRunning ? "running" : "paused"
    );

    toggleBtn.textContent = isRunning ? "⏸ توقف" : "▶️ شروع";
};

// کنترل سرعت
const speedSlider = document.getElementById("speed");
speedSlider.oninput = () => {
    const s = speedSlider.value;
    document.documentElement.style.setProperty("--speed", s + "s");
};

// نمایش نام سیاره
const infoBox = document.getElementById("infoBox");

document.querySelectorAll(".planet").forEach(planet => {
    planet.addEventListener("click", () => {
        const name = planet.dataset.name;
        infoBox.textContent = "سیاره: " + name;
        infoBox.style.opacity = 1;

        setTimeout(() => {
            infoBox.style.opacity = 0;
        }, 1500);
    });
});