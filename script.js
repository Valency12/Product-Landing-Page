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

/*carrusel de productos*/
document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('.carrusel');
    const carruselContainer = document.querySelector('.carrusel-container');
    const productos = document.querySelectorAll('.producto');
    let currentIndex = 0;
    const totalProductos = productos.length;
    let intervalo;
    let isPaused = false;

    function moverCarrusel() {
        if (!isPaused) {
            currentIndex = (currentIndex + 1) % totalProductos;
            const offset = currentIndex * -33.33;
            carrusel.style.transform = `translateX(${offset}%)`;
        }
    }

    function iniciarCarrusel() {
        isPaused = false;
        intervalo = setInterval(moverCarrusel, 5000);
    }

    function detenerCarrusel() {
        isPaused = true;
        clearInterval(intervalo);
    }

    // Iniciar el carrusel automático
    iniciarCarrusel();

    // Eventos para pausar y reanudar el carrusel
    carruselContainer.addEventListener('mouseenter', detenerCarrusel);
    carruselContainer.addEventListener('mouseleave', iniciarCarrusel);
}); 

