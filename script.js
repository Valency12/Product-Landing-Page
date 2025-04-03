document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger-menu");
    const sidebar = document.getElementById("sidebar");
    const closeSidebar = document.getElementById("close-sidebar");

    hamburger.addEventListener("click", () => {
        sidebar.classList.add("active");
    });

    closeSidebar.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });

    // Cerrar sidebar al hacer clic en un enlace
    document.querySelectorAll(".sidebar .nav-link").forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("active");
        });
    });
});

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselImages = document.querySelector('.carousel-images');

let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    const totalImages = carouselImages.children.length;
    currentIndex = (currentIndex < totalImages - 1) ? currentIndex + 1 : totalImages - 1;
    updateCarousel();
});

function updateCarousel() {
    const imageWidth = carouselImages.children[0].clientWidth;
    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}