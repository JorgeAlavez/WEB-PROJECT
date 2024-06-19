<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

    include 'conexion_be.php';

    $username = mysqli_real_escape_string($conexion, $_POST['usuario']);
    $password = mysqli_real_escape_string($conexion, $_POST['contrasena']);
    $email = mysqli_real_escape_string($conexion, $_POST['email']);
    $firstname = mysqli_real_escape_string($conexion, $_POST['nombre']);
    $lastname = mysqli_real_escape_string($conexion, $_POST['apellidos']);
    // Asumiendo que tienes estos valores en tu formulario o los establecerás de alguna manera


    $query = "INSERT INTO usuarios(username, password, email, firstname, lastname) 
              VALUES('$username', '$password', '$email', '$firstname', '$lastname')";
        
        $insercionExitosa = true; // o false, dependiendo del resultado de tu operación

        if (mysqli_query($conexion, $query)) {
            $respuesta = [
                "cod" => 1,
                "msj" => "Registro completado con éxito.",
                "icono" => "success", // Asegúrate de que este valor sea reconocido por tu código JS para mostrar el icono correcto.
                "data" => "Información adicional si es necesario"
            ];
        } else {
            // Si hubo un error en la inserción:
            $respuesta = [
                "cod" => 0,
                "msj" => "Error al completar el registro.",
                "icono" => "error", // Asegúrate de que este valor sea reconocido por tu código JS para mostrar el icono correcto.
            ];
        }
        
        // Envío de la respuesta en formato JSON.
        header('Content-Type: application/json');
        echo json_encode($respuesta);
?>