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
const carouselTrack = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const itemsToShow = 3; // Número de imágenes visibles
const totalItems = items.length;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - itemsToShow;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < totalItems - itemsToShow) ? currentIndex + 1 : 0;
    updateCarousel();
});

function updateCarousel() {
    const itemWidth = items[0].clientWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

