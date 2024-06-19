<?php 
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    session_start();

    include 'conexion_be.php';

    // $correo = $_POST['correo_electronico'];
    // $password = $_POST['password'];
    $correo = mysqli_real_escape_string($conexion, $_POST['correo_electronico']);
    $contrasena = mysqli_real_escape_string($conexion, $_POST['password']);

    $query = "SELECT *  FROM usuarios WHERE email = '$correo' AND password = '$contrasena' ";
    $res = mysqli_query($conexion, $query);

    if (mysqli_query($conexion, $query)) {
        $respuesta = [
            "cod" => 1,
            "msj" => "Información correcta.",
            "icono" => "success", // Asegúrate de que este valor sea reconocido por tu código JS para mostrar el icono correcto.
            "data" => "Bienvenido a la FrontStore!"
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

    if($res){

        $id = mysqli_fetch_array($res); 
        $_SESSION['nombre'] = $id[0];
        $_SESSION['apellidos'] = $id[1];
        $_SESSION['usuario'] = $id[2];
        $_SESSION['correo'] = $id[3];
        $_SESSION['contrasena'] = $id[4];
    }
    

?>