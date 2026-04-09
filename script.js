const texts = ["Desarrollador Web", "Técnico Informático"];
let index = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

const speed = 180;
const eraseSpeed = 120;
const delay = 2000;

function typeEffect() {
    const currentText = texts[index];

    if (!deleting) {
        typingElement.textContent = currentText.slice(0, charIndex++);
        if (charIndex > currentText.length) {
            deleting = true;
            setTimeout(typeEffect, delay);
            return;
        }
    } else {
        typingElement.textContent = currentText.slice(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            index = (index + 1) % texts.length;
            charIndex = 0;
            typingElement.textContent = "";
        }
    }

    setTimeout(typeEffect, deleting ? eraseSpeed : speed);
}

typeEffect();


