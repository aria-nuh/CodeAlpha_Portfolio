// === HAMBURGER MENU ===
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// === TYPING EFFECT ===
const texts = [
    "Frontend Developer Enthusiast",
    "I love turning ideas into digital experiences — clean, responsive, and made to inspire users."
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) { count = 0; }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typing").textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1500);
    } else {
        setTimeout(type, 100);
    }
})();

// === SMOOTH SCROLL UNTUK SEMUA LINK ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => { /* ✅ SMOOTH SCROLL */
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); /* ✅ mencegah jump default */
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({ behavior: 'smooth' }); /* ✅ smooth scroll */
        }
    });
});

// === DARK MODE TOGGLE ===
const toggle = document.querySelector("#toggle-dark");
const body = document.body;
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");
const about = document.querySelector(".about");

// Cek theme saat reload
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    navbar.classList.add("dark");
    hero.classList.add("dark");
    about.classList.add("dark");
    toggle.textContent = "☀️";
} else {
    toggle.textContent = "🌙";
}

// Event listener untuk toggle
toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    navbar.classList.toggle("dark");
    hero.classList.toggle("dark");
    about.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        toggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        toggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
});
