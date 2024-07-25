// JavaScript for smooth scrolling and "Show More" toggle
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const toggleButton = document.getElementById("toggleButton");
    const moreContent = document.getElementById("moreContent");

    toggleButton.addEventListener("click", function () {
        if (moreContent.style.display === "none" || moreContent.style.display === "") {
            moreContent.style.display = "block";
            toggleButton.textContent = "Show Less";
        } else {
            moreContent.style.display = "none";
            toggleButton.textContent = "Show More";
        }
    });

    // Pointer button functionality
    const pointerButtonContainer = document.querySelector(".pointer-button-container");
    const pointerButton = document.querySelector(".pointer-button");

    pointerButton.addEventListener("click", function () {
        pointerButtonContainer.classList.toggle("active");
    });

    // Fade-in effect on scroll
    const fadeInSections = document.querySelectorAll(".fade-in");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInSections.forEach(section => {
        observer.observe(section);
    });
});
