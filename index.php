<?php
// Permitir solicitudes de cualquier origen
header('Access-Control-Allow-Origin: *');

session_start();
print_r($_SESSION);
?>

<!DOCTYPE html>
<!-- https://localhost/tienda_virtualv2/index.php -->
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
                    <input type="text" id="searchBar" class="search" placeholder="Buscar">
                    <button id="searchButton" class="buttonsearch"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <i class="fa-solid fa-basket-shopping"></i>
                <div class="iniciarses">
                    <i class="fa-solid fa-user"></i>
                    <a href="iniciosesion/WEB-PROJECT-master/principal.php"><button class="btnini">Iniciar sesión</button></a>
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

<!----------------- IMAGENDE FONDO -------------------- -->
   
    <section class="fondoBienvenida">
            <div class="contenidoFondoBienvenida">
                <h1>FrontStore</h1>
            </div>
    </section>

        
    <!----------------- BARRA DE BENIFICIOS -------------------- -->
    
    <div class="contenedorBarraBenificios">
        <div class="container text-center">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
              <div class="col">
                <i class="fa-solid fa-dollar-sign"></i>
                <p>Los mejores precio del Internet</p>
              </div>
              <div class="col">
                <i class="fa-regular fa-credit-card"></i>
                <p>Pagos seguros</p>
              </div>
              <div class="col">
                <i class="fa-solid fa-user"></i>
                <p>+1000 compradores</p>
              </div>
              <div class="col">
                <i class="fa-solid fa-truck"></i>
                <p>Entregas rápidas</p>
              </div>
            </div>
          </div>
    </div>
    
    



    <!--------------------- BARRA DESLIZADORA DE CATEGORÍAS ---------------------------------->

    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="cardsCarrusel">
                <div class="card text-center" style="max-width: 40rem; position: relative;">
                  <a href="ropayacce.php" style="color: inherit; text-decoration: none;">
                    <img src="img/ropanav_red.jpg" class="card-img-top tamañoImagenNav" alt="...">
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                      <h5 class="card-title text-white">Ropa y Accesorios</h5>
                    </div>
                  </a>
                </div>
                <div class="card text-center" style="max-width:40rem;">
                  <a href="automotriz.php" style="color: inherit; text-decoration: none;">
                    <img src="img/moto (1).jpg" class="card-img-top tamañoImagenNav" alt="...">
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                      <h5 class="card-title text-white">Automotriz</h5>
                    </div>
                  </a>
                </div>
                <div class="card text-center" style="max-width: 40rem;">
                  <a href="bellezaycui.php" style="color: inherit; text-decoration: none;">
                    <img src="img/accesoriosnav_red.jpg" class="card-img-top tamañoImagenNav" alt="...">
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                      <h5 class="card-title text-white">Belleza y Cuidado Personal</h5>
                    </div>
                  </a>
                </div>
            </div>
          </div>
          <div class="carousel-item active">
            <div class="cardsCarrusel">
                <div class="card text-center" style="width: 40rem;">
                  <a href="electronica.php" style="color: inherit; text-decoration: none;">
                    <img src="img/gamingnav_red.jpg" class="card-img-top tamañoImagenNav" alt="...">
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                      <h5 class="card-title text-white">Electrónica</h5>
                    </div>
                  </a>
                </div>
                <div class="card text-center" style="width:40rem;">
                  <a href="comestibles.php" style="color: inherit; text-decoration: none;">
                    <img src="img/comestibles1.jpeg" class="card-img-top tamañoImagenNav" alt="...">
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                      <h5 class="card-title text-white">Comestibles</h5>
                    </div>
                  </a>
                </div>
                <div class="card text-center" style="width: 40rem;">
                  <a href="hogar.php" style="color: inherit; text-decoration: none;">
                    <img src="img/hogarnav_red.jpg" class="card-img-top tamañoImagenNav" alt="...">
                    <div class="card-img-overlay d-flex justify-content-center align-items-center">
                      <h5 class="card-title text-white">Hogar</h5>
                    </div>
                  </a>
                </div>
            </div>
          </div>
         
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <!-- -----------------CARDS DE LOS 100 PRODUCTOS ---------------------------------------->
      <div class="tituloNuestrosProductos">
        <h1>Nuestros Productos</h1>
      </div>
      <section class="gallery">
        <div class="container">
            <div id="productos" class="row"></div>
        </div> 
      </section>
     
      
      


    <!---------------------------- Footer ----------------------------->
    
    <footer class="footer">
        <p class="footer__texto">FrontStore - Todos los derechos reservados 2024.</p>
        <p class="footer__texto">Aplican términos y condiciones</p>
    </footer>

    
    <!-- <a class="attribution" href="http://fontawesome.io/">
    <i class="fa fa-font-awesome"></i> fontawesome.io</a> -->


    <!----------------- JAVASCRIPT -------------------- -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
    crossorigin="anonymous"></script>
    <script
        src="https://kit.fontawesome.com/81581fb069.js"
        crossorigin="anonymous"
    ></script>
    <script src="js/app1.js"></script>
    <script src="js/data.js"></script>
</body>
</html>
