<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..
    900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
    rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" 
    crossorigin="anonymous">
    <link rel="stylesheet" href="style/app.css">
    <link rel="stylesheet" href="style/normalize.css">
    <title>Tienda Virtual</title>
</head>
<body>
    <!----------------- HEADER -------------------- -->
    <header class="header">
        <!-- <img src="img/logotipo.png"> -->
        <div class="contenido-header">
            <div class="contenido hero">
                <div class="logoTiendaVirtual">
                    <a href="index.php"><img src="img/logotipor.png" class="logoimg" alt="logotipo"></a>
                    <h1>FrontStore</h1>
                </div>
                <div class="search">
                    <input type="text" class="search" placeholder="Buscar">
                    <button class="buttonsearch"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <i class="fa-solid fa-basket-shopping"></i>
                <div class="iniciarses">
                    <i class="fa-solid fa-user"></i>
                    <a href="#"><button class="btnini">Iniciar sesión</button></a>
                </div>
            </div>
        
<!----------------- BARRA DE NAVEGACIÓN-------------------- -->    
        
        <div class="container-navbar">
            <nav class="navbar container">
                <ul class="menu">
                    <li><a href="masVendido.php">Lo más vendido</a></li>
                    <li><a href="promociones.php">Promociones</a></li>
                    <li><a href="outlet.php">Outlet</a></li>
                </ul>
            </nav>
        </div>
    </div>
    </header>

    <div class="tituloNuestrosProductos">
        <h1>Promociones</h1>
    </div>

    <!-- CARDS DE LOS PRODUCTOS CON MAYOR DESCUENTO -->


      <section class="gallery">
        <div class="container">
            <div id="productos" class="row"></div>
        </div> 
      </section>

    

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
    crossorigin="anonymous"></script>
    <script
        src="https://kit.fontawesome.com/81581fb069.js"
        crossorigin="anonymous"
    ></script>
    <script src="js/promociones.js"></script>
    <script src="js/data.js"></script>
</body>
</html>