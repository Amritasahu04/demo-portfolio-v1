const toggle = document.querySelector(".glass-toggle");

const thumb = document.querySelector(".toggle-thumb");

const labels = document.querySelectorAll(".toggle-label");

let lightMode = false;

toggle.addEventListener("click", () => {

    lightMode = !lightMode;

    document.body.classList.toggle("light-mode");

    if (lightMode) {
        thumb.style.right = "74px";
    } else {
        thumb.style.right = "4px";
    }

    labels.forEach(label => {
        label.classList.remove("active-theme");
    });

    if (lightMode) {
        labels[0].classList.add("active-theme");
    } else {
        labels[1].classList.add("active-theme");
    }

});