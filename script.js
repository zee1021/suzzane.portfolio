// ========================================
// Mobile Menu Toggle
// ========================================
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle) {
    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('show');
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('show');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('show');
        }
    });
}

// ========================================
// Scrolling for Navigation Links
// ========================================
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

// ========================================
// Active Navigation Highlighting
// ========================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function updateActiveNav() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ========================================
// Back to Top Button
// ========================================
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================================
// Section Scroll Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ========================================
// Contact Form Validation
// ========================================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Clear previous messages
        formMessage.textContent = '';
        formMessage.classList.remove('success', 'error');
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Reset error states
        document.getElementById('name').classList.remove('error');
        document.getElementById('email').classList.remove('error');
        document.getElementById('subject').classList.remove('error');
        document.getElementById('message').classList.remove('error');
        
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('subjectError').textContent = '';
        document.getElementById('messageError').textContent = '';
        
        // Validation
        let isValid = true;
        
        if (name.length < 2) {
            document.getElementById('name').classList.add('error');
            document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
            isValid = false;
        }
        
        if (!isValidEmail(email)) {
            document.getElementById('email').classList.add('error');
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            isValid = false;
        }
        
        if (subject.length < 3) {
            document.getElementById('subject').classList.add('error');
            document.getElementById('subjectError').textContent = 'Subject must be at least 3 characters';
            isValid = false;
        }
        
        if (message.length < 10) {
            document.getElementById('message').classList.add('error');
            document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
            isValid = false;
        }
        
        if (isValid) {
            // Show success message
            formMessage.textContent = 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!';
            formMessage.classList.add('success');
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.classList.remove('success');
            }, 5000);
        }
    });
}

// ========================================
// Email Validation Function
// ========================================
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ========================================
// Input Validation
// ========================================
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

if (nameInput) {
    nameInput.addEventListener('blur', function() {
        if (this.value.trim().length < 2 && this.value.trim().length > 0) {
            this.classList.add('error');
            document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
        } else {
            this.classList.remove('error');
            document.getElementById('nameError').textContent = '';
        }
    });
}

if (emailInput) {
    emailInput.addEventListener('blur', function() {
        if (!isValidEmail(this.value.trim()) && this.value.trim().length > 0) {
            this.classList.add('error');
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
        } else {
            this.classList.remove('error');
            document.getElementById('emailError').textContent = '';
        }
    });
}

if (subjectInput) {
    subjectInput.addEventListener('blur', function() {
        if (this.value.trim().length < 3 && this.value.trim().length > 0) {
            this.classList.add('error');
            document.getElementById('subjectError').textContent = 'Subject must be at least 3 characters';
        } else {
            this.classList.remove('error');
            document.getElementById('subjectError').textContent = '';
        }
    });
}

if (messageInput) {
    messageInput.addEventListener('blur', function() {
        if (this.value.trim().length < 10 && this.value.trim().length > 0) {
            this.classList.add('error');
            document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
        } else {
            this.classList.remove('error');
            document.getElementById('messageError').textContent = '';
        }
    });
}

// ========================================
// Page Load Initialization
// ========================================
window.addEventListener('load', function() {
    console.log('Portfolio page loaded successfully!');
    console.log('Interactive features enabled: smooth scrolling, form validation, animations');
});
