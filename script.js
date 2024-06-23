// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Toggle "Show More" content
    const toggleButton = document.getElementById('toggleButton');
    const moreContent = document.getElementById('moreContent');
    
    toggleButton.addEventListener('click', function() {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            toggleButton.textContent = 'Show Less';
        } else {
            moreContent.style.display = 'none';
            toggleButton.textContent = 'Show More';
        }
    });

    // Fade-in effect for sections
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Pointer button functionality
    const pointerButton = document.querySelector('.pointer-button');
    const pointerOptions = document.querySelector('.pointer-options');

    pointerButton.addEventListener('click', function() {
        if (pointerOptions.style.display === 'none' || pointerOptions.style.display === '') {
            pointerOptions.style.display = 'flex';
        } else {
            pointerOptions.style.display = 'none';
        }
    });

    document.addEventListener('click', function(event) {
        if (!pointerButton.contains(event.target) && !pointerOptions.contains(event.target)) {
            pointerOptions.style.display = 'none';
        }
    });
});
