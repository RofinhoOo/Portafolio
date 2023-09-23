<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $telefono = $_POST["telefono"];
    $correo = $_POST["correo"];
    $tema = $_POST["tema"];
    $mensaje = $_POST["mensaje"];

    $destinatario = "alexrofes1992@gmail.com"; // Cambia esto por tu dirección de correo electrónico
    $asunto = "Nuevo mensaje de contacto de $nombre";

    $mensajeCompleto = "Nombre: $nombre\n";
    $mensajeCompleto .= "Teléfono: $telefono\n";
    $mensajeCompleto .= "Correo: $correo\n";
    $mensajeCompleto .= "Tema: $tema\n";
    $mensajeCompleto .= "Mensaje:\n$mensaje";

    mail($destinatario, $asunto, $mensajeCompleto);

    // Redirigir al usuario a una página de confirmación
    header("Location: confirmacion.html");
}
?>
