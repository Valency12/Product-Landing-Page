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

//codigo de copilot
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".carousel-track");
    const items = document.querySelectorAll(".tarjeta-receta");
    const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight);
    let currentPosition = 0;

    function moveCarousel() {
        currentPosition -= itemWidth;
        if (Math.abs(currentPosition) >= track.scrollWidth) {
            currentPosition = 0; // Reinicia el carrusel
        }
        track.style.transform = `translateX(${currentPosition}px)`;
    }

    // Mueve el carrusel automáticamente cada 3 segundos
    setInterval(moveCarousel, 3000);
});

