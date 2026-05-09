const words = [
    "AVAILABLE FOR OPPORTUNITIES",
    "OPEN TO COLLABORATIONS",
    "BUILDING REAL-TIME SYSTEMS",
    "CURRENTLY GRINDING DSA"
];

const tagLine = document.querySelector(".tag-line");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        tagLine.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeLoop, 1400);

            return;
        }

    } else {

        tagLine.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
            (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeLoop, deleting ? 40 : 75);
}

typeLoop();