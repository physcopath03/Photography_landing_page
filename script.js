document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');
    const moreContent = document.getElementById('moreContent');

    toggleButton.addEventListener('click', () => {
        if (moreContent.style.display === 'none' || moreContent.style.display === '') {
            moreContent.style.display = 'block';
            toggleButton.textContent = 'Show Less';
        } else {
            moreContent.style.display = 'none';
            toggleButton.textContent = 'Show More';
        }
    });
});
