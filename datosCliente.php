<?php
// Detalles de conexión a la base de datos
$host = "localhost"; // o la IP del servidor de base de datos
$username = "root"; // o el nombre de usuario de la base de datos
$password = ""; // o la contraseña de la base de datos
$dbname = "tienda_virtualv2"; //Nombre de la base de datos a la que se quiere conectar

// Crear conexión
$conn = new mysqli($host, $username, $password, $dbname);
//Se crea un nuevo objeto mysqli con los datos de conexión a la base de datos, conexion

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Paso 2: Manejar la recepción del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['phone'], $_POST['address'])) {
    $phone = $conn->real_escape_string($_POST['phone']);
    $address = $conn->real_escape_string($_POST['address']);
    // Suponiendo que tienes una columna 'id' para identificar al usuario
    $userId = 1; // Aquí deberías obtener el ID del usuario de alguna manera

    // Preparar la consulta SQL
    $sql = "UPDATE usuarios SET phone = '$phone', address = '$address' WHERE id = $userId";

    // Ejecutar la consulta
    if ($conn->query($sql) === TRUE) {
        echo "Datos actualizados correctamente.";
    } else {
        echo "Error al actualizar los datos: " . $conn->error;
    }
}

// Consulta SQL para seleccionar los datos de todos los usuarios
$sql = "SELECT * FROM usuarios WHERE id = 1";

$result = $conn->query($sql);





?>
<!DOCTYPE html>
<html>
<head>
    <title>Datos del Cliente</title>
    <link rel="stylesheet" href="style/datosCliente.css">
     <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
     integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" 
     crossorigin="anonymous"/>
</head>
<body>

<div class="top-section">
     <!-- Contenedor para la imagen de perfil -->
     <div class="profile-pic-container">
        <input type="file" id="profilePicInput" accept="image/*">
        <label for="profilePicInput" class="profile-pic-upload">
            <!-- La imagen de perfil se mostrará aquí -->
            <img id="profilePic" src="img/avatar2.png" alt="Profile Picture">
        </label>
    </div>

</div> <!-- Sección añadida -->
    <header class="headerColor">
        
    </header>

    <!-- Paso 1: Crear un formulario HTML -->


<?php


// Ajuste en la verificación de $_POST
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['address'])) {
    $address = $_POST['address'];
    // Asegúrate de obtener el userId de manera adecuada
    $userId = 1;

    // Preparar la consulta SQL usando sentencias preparadas
    $stmt = $conn->prepare("UPDATE usuarios SET address = ? WHERE id = ?");
    // Vincular los parámetros a la sentencia preparada como strings
    $stmt->bind_param("si", $address, $userId);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        
    } else {
        // Considera manejar el error de manera más específica
        
    }
    $stmt->close();
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['phone'])) {
    $phone = $_POST['phone'];
    // Asegúrate de obtener el userId de manera adecuada
    $userId = 1;

    // Preparar la consulta SQL usando sentencias preparadas
    $stmt = $conn->prepare("UPDATE usuarios SET phone = ? WHERE id = ?");
    // Vincular los parámetros a la sentencia preparada como strings
    $stmt->bind_param("si", $phone, $userId);

    // Ejecutar la consulta
    if ($stmt->execute()) {
        
    } else {
        // Considera manejar el error de manera más específica
        
    }
    $stmt->close();
}

$result = $conn->query($sql);// Consulta SQL para seleccionar los datos de todos los usuarios
$sql = "SELECT * FROM usuarios WHERE id = 1";

$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // Mostrar datos de cada fila
    while($row = $result->fetch_assoc()) {
        echo '<div class="perfil-usuario-footer">' .
     '<h1 class="nombreTitulo">' . $row["firstname"] . '</h1>' .


     '<div class="datos-container">' .
     ' <ul class="lista-datos">' .
     '<li class="nombreUsuario"><i class="fa-solid fa-user"></i> Usuario: ' . $row["username"] . '</li>' .
     '<li class="data-item"><i class="fa-regular fa-envelope"></i> Email: ' . $row["email"] . '</li>' .
     '<li class=""><i class="fa-solid fa-house"></i> Address:' . $row["address"] . '</li>' .
     '</ul>' .
     '</div>'.

    '<div class="datos-container">' .
     '<ul class="lista-datos">'.
     '<div class="update-section">' .
         '<form method="POST" action="' . htmlspecialchars($_SERVER["PHP_SELF"]) . '">' .
         'Nuevo Teléfono: <input type="text" name="phone" value="' . $row["phone"] . '" required><br>' .
         '<button type="submit" style="margin-left: 10px;">Guardar</button><br>'.
         '</form>' .
     '</div>' .
     '<li class="data-item"><i class="fa-solid fa-phone"></i> Phone: ' . $row["phone"] . '</li>' .
     '<div class="update-section">' .
         '<form method="post" action="' . htmlspecialchars($_SERVER["PHP_SELF"]) . '">' .
         'Nueva Dirección: <input type="text" name="address" value="' . $row["address"] . '" required><br>' .
         '<button type="submit" style="margin-left: 10px;">Guardar</button><br>' .
         '</form>' .
     '</div>' .
     '<li class=""><i class="fa-solid fa-house"></i> Address: ' . $row["address"] . '</li>' .
     '<li class="data-item"><i class="fa-solid fa-calendar-week"></i> Fecha Nacimiento: ' . $row["fecha_nacimiento"] . '</li>' .
     '</ul>' .
     '</div>'.

    
     '<div class="datos-container cash">' .
        '<li class="data-item"><i class="fa-solid fa-money-bill"></i> Front-Cash: $' . $row["ingresos"] . '</li>' .
     '</div>' .
     '</div><br>';
    }
} else {
    echo "<tr><td colspan='9'>0 resultados</td></tr>";
}


?>

<script
        src="https://kit.fontawesome.com/81581fb069.js"
        crossorigin="anonymous"
></script>
<script src="js/datosCliente.js"></script>
</body>
</html>

<?php
// Cerrar conexión
$conn->close();

// ID del usuario que quieres buscar
// $userId = 1; // Cambia 1 por el ID del usuario que deseas mostrar

// // Consulta SQL para seleccionar los datos del usuario
// $sql = "SELECT * FROM usuarios WHERE id = $userId";

// $result = $conn->query($sql);

// if ($result->num_rows > 0) {
//     // Mostrar datos de cada fila
//     while($row = $result->fetch_assoc()) {
//         echo "ID: " . $row["id"] . 
//              " - ssername: " . $row["username"] . 
//              " - password: " . $row["password"] .  // Aviso de seguridad: tener cuidado al imprimir contraseñas
//              " - email: " . $row["email"] . 
//              " - firstname: " . $row["firstname"] . 
//              " - dddress: " . $row["address"] . 
//              " - phone: " . $row["phone"] . 
//              " - createdate: " . $row["createdate"] . 
//              " - ingresos: " . $row["ingresos"] . "<br>";
//     }
// } else {
//     echo "0 resultados";
// }

// // Cerrar conexión
// $conn->close();
?>
