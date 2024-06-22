document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Toggle button for "Show More" content
    const toggleButton = document.getElementById('toggleButton');
    const moreContent = document.getElementById('moreContent');

    toggleButton.addEventListener('click', () => {
        if (moreContent.style.display === 'none') {
            moreContent.style.display = 'block';
            toggleButton.textContent = 'Show Less';
        } else {
            moreContent.style.display = 'none';
            toggleButton.textContent = 'Show More';
        }
    });
});
