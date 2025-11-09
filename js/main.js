// Smooth scrolling for navigation links
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

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Simple validation
        if (name && email && message) {
            alert('Merci pour votre message! Je vous répondrai bientôt.');
            contactForm.reset();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });
}

// Add active class to navigation on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const revealItems = Array.from(document.querySelectorAll('.reveal-on-scroll'));
    if (!revealItems.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                
                if (el.dataset && el.dataset.delay) {
                    el.style.transitionDelay = `${parseInt(el.dataset.delay, 10)}ms`;
                }
                el.classList.add('reveal');
                obs.unobserve(el);
            }
        });
    }, {
        threshold: 0.12
    });
    revealItems.forEach((el, i) => {
        if (!el.dataset || !el.dataset.delay) {
            el.style.transitionDelay = `${i * 80}ms`;
        }
        observer.observe(el);
    });
});

// Make project cards navigable when they have a data-link attribute
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = Array.from(document.querySelectorAll('.project-card[data-link]'));
    if (!projectCards.length) return;

    projectCards.forEach(card => {
        const url = card.getAttribute('data-link');
        // click -> navigate
        card.addEventListener('click', (e) => {
            // open in same tab
            if (url) window.location.href = url;
        });

        // keyboard support: Enter or Space
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                if (url) window.location.href = url;
            }
        });
    });
});
