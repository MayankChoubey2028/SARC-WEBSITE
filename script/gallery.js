// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Gallery Toggle Function
function toggle(el) {
    let content = el.nextElementSibling;
    let sign = el.querySelector("span");
    if (content.style.display === "block") {
        content.style.display = "none";
        sign.innerHTML = "+";
    } else {
        content.style.display = "block";
        sign.innerHTML = "−";
    }
}

// Gallery Slider Function
function slide(btn, dir) {
    let slider = btn.parentElement;
    let slides = slider.querySelector(".slides");
    let total = slides.children.length;
    let index = Number(slider.dataset.index);
    index += dir;
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    slider.dataset.index = index;
    slides.style.transform = "translateX(-" + (index * 100) + "%)";
}