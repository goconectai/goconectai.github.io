// Conectaí Premium Landing Page Scripts

document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    const nav = document.getElementById('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '0.5rem 0';
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            nav.style.padding = '0';
            nav.style.background = 'rgba(255, 255, 255, 0.8)';
            nav.style.boxShadow = 'none';
        }
    });

    // ==========================================
    // Intersection Observer for Elements
    // ==========================================
    const bentoItems = document.querySelectorAll('.bento-item, .exp-grid, .final-cta');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // If it's the CTA, maybe a special trigger
            }
        });
    }, observerOptions);

    bentoItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(40px)';
        item.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
        observer.observe(item);
    });

    // ==========================================
    // Carousel Navigation
    // ==========================================
    const track = document.getElementById('carousel-track');
    const nextBtn = document.querySelector('.nav-btn.next');
    const prevBtn = document.querySelector('.nav-btn.prev');

    if (track && nextBtn && prevBtn) {
        const cardWidth = 380 + 32; // card width + gap (2rem = 32px)
        
        nextBtn.addEventListener('click', () => {
            track.parentElement.scrollBy({ left: cardWidth, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            track.parentElement.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        });

        // Hide/Show opacity for buttons based on scroll
        const updateArrows = () => {
            const scrollLeft = track.parentElement.scrollLeft;
            const maxScroll = track.parentElement.scrollWidth - track.parentElement.clientWidth;
            prevBtn.style.opacity = scrollLeft <= 10 ? '0.3' : '1';
            nextBtn.style.opacity = scrollLeft >= maxScroll - 10 ? '0.3' : '1';
        };

        track.parentElement.addEventListener('scroll', updateArrows);
        updateArrows(); // Initial state
    }
    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
        });
    }

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('menu-open');
        });
    });
});
