const toggle = document.querySelector(".glass-toggle");

const thumb = document.querySelector(".toggle-thumb");
const labels = document.querySelectorAll(".toggle-label");

let isDark = true; // starts in dark mode

toggle.addEventListener("click", () => {

    isDark = !isDark;

    document.body.classList.toggle(
        "light-mode",
        !isDark
    );

    thumb.style.right =
        isDark ? "4px" : "82px";

    labels[0].classList.toggle(
        "active-theme",
        !isDark
    );

    labels[1].classList.toggle(
        "active-theme",
        isDark
    );
});

const cards = document.querySelectorAll(".project-card");

let current = 0;

function updateCards() {

    cards.forEach((card) => {

        card.classList.remove(
            "active",
            "next",
            "next-2"
        );

    });

    cards[current].classList.add("active");

    cards[(current + 1) % cards.length]
        .classList.add("next");

    cards[(current + 2) % cards.length]
        .classList.add("next-2");
}


const nextBtn =
    document.querySelector(".next-btn");

const prevBtn =
    document.querySelector(".prev-btn");


/* NEXT */

nextBtn.addEventListener("click", () => {

    current =
        (current + 1) % cards.length;

    updateCards();
});

/* PREV */

prevBtn.addEventListener("click", () => {

    current =
        (current - 1 + cards.length)
        % cards.length;

    updateCards();
});

updateCards();

updateCards();

async function handleSubmit(e) {

    e.preventDefault();

    const form = e.target;

    const btn = document.querySelector(".send-btn");

    const formData = {

        name: form.name.value,

        email: form.email.value,

        subject: form.subject.value,

        message: form.message.value,
    };

    try {

        btn.textContent = "SENDING...";
        btn.disabled = true;

        const response = await fetch(
            "/.netlify/functions/contact",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                },

                body: JSON.stringify(formData),
            }
        );

        const data = await response.json();

        if (data.success) {

            btn.textContent =
                "MESSAGE SENT ✓";

            btn.style.background =
                "#22c55e";

            form.reset();

        } else {

            btn.textContent =
                data.message || "FAILED ✕";

            btn.style.background =
                "#ef4444";
        }

    } catch (err) {

        console.error(err);

        btn.textContent = "ERROR ✕";

        btn.style.background = "#ef4444";
    }

    setTimeout(() => {

        btn.textContent =
            "SEND MESSAGE →";

        btn.style.background = "";

        btn.disabled = false;

    }, 3000);
}

window.handleSubmit = handleSubmit;