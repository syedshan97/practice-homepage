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