const butterfly = document.getElementById("butterfly");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let currentX = mouseX;
let currentY = mouseY;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateButterfly() {

    currentX += (mouseX - currentX) * 0.15;
    currentY += (mouseY - currentY) * 0.15;

    butterfly.style.left = currentX + "px";
    butterfly.style.top = currentY + "px";

    requestAnimationFrame(animateButterfly);
}

animateButterfly();