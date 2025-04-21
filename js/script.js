// js/script.js
/**
 * Mobile Navigation Toggle
 */
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const mobileMenuClose = document.querySelector('.mobile-menu-close');

// Toggle mobile menu
function toggleMobileMenu() {
    mobileNav.classList.toggle('active');
}

// Event Listeners
mobileMenuToggle.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileNav.classList.remove('active');
    }
});

// Close menu after clicking any link or CTA
document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
});


// Video Modal Functionality
const videoCTA = document.querySelector('.cta-video');
const videoModal = document.getElementById('videoModal');
const closeModal = document.querySelector('.close-modal');

// Open Modal
videoCTA.addEventListener('click', (e) => {
    e.preventDefault();
    videoModal.classList.add('active');
});

// Close Modal
closeModal.addEventListener('click', () => {
    videoModal.classList.remove('active');
});

// Close when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
    }
});

// Number Animation
function animateNumbers() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-count');
        const duration = 2000;
        const startTime = Date.now();
        
        const updateNumber = () => {
            const currentTime = Date.now();
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const currentNumber = Math.floor(progress * target);
            
            counter.textContent = currentNumber;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            }
        };
        
        requestAnimationFrame(updateNumber);
    });
}

// Trigger when section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(document.querySelector('.stats-grid'));

// Testimonial Carousel Logic
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
let autoSlideInterval;

function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 32; // Include gap
    track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCarousel();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Event Listeners
prevBtn.addEventListener('click', () => {
    prevSlide();
    resetAutoSlide();
});

nextBtn.addEventListener('click', () => {
    nextSlide();
    resetAutoSlide();
});

// Pause on hover
testimonialCarousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
testimonialCarousel.addEventListener('mouseleave', startAutoSlide);

// Initialize
startAutoSlide();
window.addEventListener('resize', updateCarousel);

