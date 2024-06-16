<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..
    900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="WEB-PROJECT-master/style/estilos.css">
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
                        <!--Login-->
                <form action="" class="formulario__login">
                    <h2>Iniciar sesión</h2>
                    <input type="text" placeholder="Correo Electronico">
                    <input type="password" placeholder="Contraseña">
                    <button>Entrar</button>
                </form>
                        <!--Registro-->
                <form action="" class="formulario__register">
                    <h2>Registrarse</h2>
                    <input type="text" placeholder="Nombre Completo">
                    <input type="text" placeholder="Correo Electronico">
                    <input type="text" placeholder="Usuario">
                    <input type="password" placeholder="Contraseña">
                    <button>Registrarse</button>
                </form>
            </div>
        </div>
    </main>
    <script src="WEB-PROJECT-master/js/script.js"></script>
</body>
</html>