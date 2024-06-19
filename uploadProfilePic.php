<?php
// Conexión a la base de datos
$host = 'localhost'; // o la IP del servidor de base de datos
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'tienda_virtualv2';

$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$uploadDir = 'uploads/'; // Asegúrate de que este directorio existe y es escribible
$response = ['success' => false, 'error' => '', 'filePath' => ''];

if (isset($_FILES['profilePic'])) {
    $fileName = basename($_FILES['profilePic']['name']);
    $targetFilePath = $uploadDir . $fileName;

    // Intenta mover el archivo subido al directorio de destino
    if(move_uploaded_file($_FILES['profilePic']['tmp_name'], $targetFilePath)) {
        $response['success'] = true;
        $response['filePath'] = $targetFilePath;

        // Asume que tienes el ID del usuario almacenado en una sesión o enviado de alguna manera
        $userId = 1; // Deberías obtener este valor dinámicamente

        // Actualiza la ruta de la imagen en la base de datos
        $sql = "UPDATE usuarios SET imagenPerfil = '$targetFilePath' WHERE id = $userId";

        if ($conn->query($sql) === TRUE) {
            $response['success'] = true;
        } else {
            $response['error'] = 'Error al actualizar la base de datos: ' . $conn->error;
        }
    } else {
        $response['error'] = 'Error al subir el archivo.';
    }
} else {
    $response['error'] = 'No se recibió ningún archivo.';
}

$conn->close();

// Devuelve la respuesta en formato JSON
echo json_encode($response);
?>