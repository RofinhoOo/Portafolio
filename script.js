let menuVisible = false;

function mostrarOcultarMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
    menuVisible = !menuVisible;
}

function seleccionar() {
    const nav = document.getElementById("nav");
    nav.classList.remove("responsive");
    menuVisible = false;
}

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

window.addEventListener("scroll", efectoHabilidades());

const elementosMenu = document.querySelectorAll("#nav ul li a");
elementosMenu.forEach((elemento) => {
    elemento.addEventListener("click", seleccionar);
});

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight / 2) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});

// Path: script.js