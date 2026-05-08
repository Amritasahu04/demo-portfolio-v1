const butterfly = document.getElementById("butterfly");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

const sparkleContainer = document.getElementById("sparkle-container");

function createSparkle(x, y) {

    const sparkle = document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left =
        x + (Math.random() * 12 - 6) + "px";

    sparkle.style.top =
        y + (Math.random() * 12 - 6) + "px";

    sparkle.style.width =
        sparkle.style.height =
        Math.random() * 4 + 2 + "px";

    sparkleContainer.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 700);
}

function animateButterfly() {

    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    butterfly.style.left = currentX + "px";
    butterfly.style.top = currentY + "px";

    if (Math.random() > 0.7) {
    createSparkle(currentX, currentY);
    }

    requestAnimationFrame(animateButterfly);
}

animateButterfly();