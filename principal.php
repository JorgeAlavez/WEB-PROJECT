<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <link href="./bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <script src="./js/jquery-3.7.1.min.js"></script>
    <script src="./bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="./js/justValidate.min.js"></script>
    <script src="./js/sweetAlert.min.js"></script>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..
    900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style/estilos.css">
</head>
<body>
    <main>
        <div class="contenedor__todo"> 
            <div class="caja__trasera"> 
                <div class="caja__trasera-login">
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia sesión para entrar a la página</p>
                    <button id="btn__iniciar-sesion">Iniciar sesión</button>
                </div>
                <div class="caja__trasera-register">
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Registrate para poder iniciar sesión</p>
                    <button id="btn__resgistrarse">Regístrate</button>
                </div>
            </div>
            
                <!--Formularios de Login y Registro-->
            <div class="contenedor__login-register">      
                     <!-- Login -->
                <form action="login_action" class="formulario__login" id="loginForm" novalidate="novalidate">  
                    <h2>Iniciar sesión</h2>
                    <input type="text" id="loginEmail" placeholder="Correo Electronico">
                    <input type="password" id="loginPassword" placeholder="Contraseña">
                    <button type="submit">Entrar</button>
                </form>
                <!-- Registro -->
                <form action="registro_usuario_be.php" method="post" class="formulario__register" id="registerForm" novalidate="novalidate">
                    <h2>Registrarse</h2>
                    <input type="text" id="registerName" placeholder="Nombres:" name="nombre">
                    
                    <input type="text" id="registerLastName" placeholder="Apellidos:" name="apellidos" >
                    
                    <input type="text" id="registerEmail" placeholder="Correo Electronico:" name="correo_electronico">
                    
                    <input type="text" id="registerUser" placeholder="Usuario:" name="usuario">
                    
                    <input type="password" id="registerPassword" placeholder="Contraseña:" name="contrasena">
                    
                    <button type="submit" class="button">Registrarse</button>
                </form>
            </div>
        </div>
    </main>
    <script src="js/script.js"></script>
    <script src="js/validar_registro.js"></script>
    <script src="js/validar_login.js"></script>
</body>
</html>