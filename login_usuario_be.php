<?php 

    include 'conexion_be.php';
    session_start();

    $correo = $_POST['correo_electronico'];
    $usuario = $_POST['usuario'];

    $query = "SELECT *  FROM usuarios WHERE correo = '$correo' AND contrasena = '$contrasena' ";
    $res = mysqli_query($conexion, $query);

    if($res){

        $id = mysqli_fetch_array($res); 
        $_SESSION['nombre'] = $id[0];
        $_SESSION['apellidos'] = $id[1];
        $_SESSION['usuario'] = $id[2];
        $_SESSION['correo'] = $id[3];
        $_SESSION['contrasena'] = $id[4];
    }
    header("Location: datos_usuario.php");

?>