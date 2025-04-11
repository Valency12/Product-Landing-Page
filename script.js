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

/*carrusel de recetas*/
document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.querySelector('.carrusel-recetas');
    const carruselContainer = document.querySelector('.carrusel-container-recetas');
    const receta = document.querySelectorAll('.receta');
    let currentIndex = 0;
    const totalReceta = receta.length;
    let intervalo;
    let isPaused = false;

    function moverCarrusel() {
        if (!isPaused) {
            currentIndex = (currentIndex + 1) % totalReceta;
            const offset = currentIndex * -33.33;
            carrusel.style.transform = `translateX(${offset}%)`;
        }
    }

    function iniciarCarrusel() {
        isPaused = false;
        intervalo = setInterval(moverCarrusel, 2000);
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

//CARRUSEL DE PRODUCTOS
document.addEventListener('DOMContentLoaded', () => {
    const carruselProductos = document.querySelector('.carrusel-productos');
    const carruselContainerProductos = document.querySelector('.carrusel-container-productos');
    const productos = document.querySelectorAll('.producto');
    let currentIndex = 0;
    const productosVisibles = 4;
    let intervalo2;
    let isPaused2 = false;

    function moverCarrusel() {
        if (!isPaused2) {
            currentIndex = (currentIndex + 1) % (productos.length - productosVisibles + 1);
            const offset = currentIndex * -320; // 300px (ancho del producto) + 20px (gap)
            carruselProductos.style.transform = `translateX(${offset}px)`;
        }
    }

    function iniciarCarrusel() {
        isPaused2 = false;
        intervalo2 = setInterval(moverCarrusel, 4000);
    }

    function detenerCarrusel() {
        isPaused2 = true;
        clearInterval(intervalo2);
    }

    // Iniciar el carrusel automático
    iniciarCarrusel();

    // Eventos para pausar y reanudar el carrusel
    carruselContainerProductos.addEventListener('mouseenter', detenerCarrusel);
    carruselContainerProductos.addEventListener('mouseleave', iniciarCarrusel);
}); 
