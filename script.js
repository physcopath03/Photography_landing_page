document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("myVideo");
    const optionsButton = document.querySelector(".pointer-button");
    const optionsContainer = document.querySelector(".pointer-options");

    optionsButton.addEventListener("click", function() {
        optionsContainer.style.display = optionsContainer.style.display === "block" ? "none" : "block";
    });

    window.addEventListener("scroll", function() {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
                section.classList.add("fade-in");
            }
        });
    });

    const toggleButton = document.getElementById("toggleButton");
    const moreContent = document.getElementById("moreContent");

    toggleButton.addEventListener("click", function() {
        if (moreContent.style.display === "none" || moreContent.style.display === "") {
            moreContent.style.display = "block";
            toggleButton.textContent = "Show Less";
        } else {
            moreContent.style.display = "none";
            toggleButton.textContent = "Show More";
        }
    });
});
