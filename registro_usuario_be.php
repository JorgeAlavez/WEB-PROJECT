<?php

    include 'conexion_be.php';

    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $correo = $_POST['correo_electronico'];
    $usuario = $_POST['usuario'];
    $contrasena = $_POST['contrasena']; 

    $query = "INSERT INTO usuarios(nombre, apellidos, correo, usuario, contrasena) 
              VALUES('$nombre','$apellidos','$correo', '$usuario', '$contrasena')";
        
    $ejecutar = mysqli_query($conexion, $query);

?>