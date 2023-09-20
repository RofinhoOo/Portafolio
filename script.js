let menuVisible = false;

function enviarMensaje() {
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value;
    const tema = document.getElementById("tema").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validar que los campos no estén vacíos (puedes agregar más validaciones si es necesario)
    if (nombre === "" || telefono === "" || correo === "" || tema === "" || mensaje === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return;
    }

    // Crear un objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configurar la solicitud AJAX
    xhr.open("POST", "enviar_correo.php", true); // Reemplaza "enviar_correo.php" con la ruta correcta al script en tu servidor
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Definir la función que se ejecutará cuando la solicitud AJAX se complete
    xhr.onload = function () {
        if (xhr.status === 200) {
            alert(xhr.responseText); // Muestra la respuesta del servidor (puede ser un mensaje de confirmación)
        } else {
            alert("Error al enviar el correo electrónico.");
        }
    };

    // Enviar los datos del formulario al servidor
    const formData = `nombre=${nombre}&telefono=${telefono}&correo=${correo}&tema=${tema}&mensaje=${mensaje}`;
    xhr.send(formData);
}



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
