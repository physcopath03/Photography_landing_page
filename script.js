document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const moreContent = document.getElementById('moreContent');
    const pointerButton = document.querySelector('.pointer-button');
    const pointerOptions = document.querySelector('.pointer-options');

    toggleButton.addEventListener('click', function () {
        if (moreContent.style.display === 'none') {
            moreContent.style.display = 'block';
            toggleButton.textContent = 'Show Less';
        } else {
            moreContent.style.display = 'none';
            toggleButton.textContent = 'Show More';
        }
        toggleButton.classList.add('click-animation');
        setTimeout(() => toggleButton.classList.remove('click-animation'), 300);
    });

    pointerButton.addEventListener('click', function () {
        if (pointerOptions.style.display === 'flex') {
            pointerOptions.style.display = 'none';
        } else {
            pointerOptions.style.display = 'flex';
        }
    });
});
