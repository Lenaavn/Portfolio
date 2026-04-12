const texts = ["Desarrollador Web", "Técnico Informático"];
let index = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

const speed = 180;
const eraseSpeed = 120;
const delay = 2000;

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

// --- MENÚ RESPONSIVE ---
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '☓';
        menuBtn.setAttribute("aria-expanded", "true");
    } else {
        menuBtn.innerHTML = '☰';
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
        menuBtn.innerHTML = '☰';
        menuBtn.setAttribute("aria-expanded", "false");
    });
});

// --- EFECTO DE ESCRITURA ---
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
