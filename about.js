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

// Contact Form Modal Functions
const modal = document.getElementById('contactModal');
const userTypeInput = document.getElementById('userType');
const modalTitle = document.getElementById('modalTitle');

function openContactForm(type) {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
    
    // Set the user type and modal title based on the button clicked
    switch(type) {
        case 'alumni':
            userTypeInput.value = 'Alumni';
            modalTitle.textContent = 'Connect as Alumni';
            break;
        case 'student':
            userTypeInput.value = 'Student';
            modalTitle.textContent = 'Connect as Student';
            break;
        case 'faculty':
            userTypeInput.value = 'Faculty';
            modalTitle.textContent = 'Connect as Faculty';
            break;
        case 'general':
            userTypeInput.value = 'General Inquiry';
            modalTitle.textContent = 'Send Us Your Feedback';
            break;
    }
}

function closeContactForm() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        closeContactForm();
    }
}

// Handles form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Here we would be normally sending the form data to a server
    // For now, we'll just show an alert
    alert('Thank you for contacting SARC! We will get back to you soon.');
    
    // Reset form and close modal
    contactForm.reset();
    closeContactForm();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});