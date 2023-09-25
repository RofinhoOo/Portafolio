let menuVisible = false;

// Función que oculta o muestra el menú
function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
    menuVisible = !menuVisible;
}

// Función para cerrar el menú al hacer clic en elementos del menú
function seleccionar() {
    const nav = document.getElementById("nav");
    nav.classList.remove("responsive");
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    const skills = document.getElementById("skills");
    const distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    
    if (distancia_skills >= 300) {
        const habilidades = document.getElementsByClassName("progreso");
        
        for (let i = 0; i < habilidades.length; i++) {
            habilidades[i].classList.add(obtenerClaseAnimacion(i));
        }
    }
}

// Función para obtener la clase de animación según la habilidad
function obtenerClaseAnimacion(indice) {
    const clasesAnimaciones = [
        "javascript",
        "htmlcss",
        "photoshop",
        "wordpress",
        "drupal",
        "comunicacion",
        "trabajo",
        "creatividad",
        "dedicacion",
        "proyect"
    ];
    return clasesAnimaciones[indice];
}

// Detectar el desplazamiento para aplicar la animación de la barra de habilidades
window.addEventListener("scroll", efectoHabilidades);

// Agregar evento clic a elementos del menú
const elementosMenu = document.querySelectorAll("#nav ul li a");
elementosMenu.forEach((elemento) => {
    elemento.addEventListener("click", seleccionar);
});

// JavaScript para agregar/quitar clases al desplazarse hacia secciones
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    
    // Agrega un controlador de eventos para el evento de desplazamiento
    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight / 2) {
                section.classList.add('active'); // Agrega la clase 'active' cuando la sección está a la vista
            } else {
                section.classList.remove('active'); // Elimina la clase 'active' cuando la sección no está a la vista
            }
        });
    });
});
