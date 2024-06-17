<?php
 require 'config/config.php';
 $json = file_get_contents('data.json');
 $data = json_decode($json,true);
 
 $productos = isset($_SESSION['carrito']['productos'])? $_SESSION['carrito']['productos']:NULL;
 print_r($productos)
 
?>

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
    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/81581fb069.js"crossorigin="anonymous"></script>
    
    
 
    <title>detalles</title>
   
 </head>
 <body>
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
              <i class="fa-solid fa-basket-shopping"><a href="/carrito.php"><span id="num_cart" class="badge rounded-pill bg-dark"><?php echo $num_cart;?></span></a></i>
              <div class="iniciarses">
                  <i class="fa-solid fa-user"></i>
                  <a href="#"><button class="btnini">Iniciar sesión</button></a>
              </div>
          </div>
      
<!----------------- BARRA DE NAVEGACIÓN-------------------- -->    
      
      <div class="container-navbar">
          <nav class="navbar container">
              <ul class="menu">
                  <li><a href="#">Lo más vendido</a></li>
                  <li><a href="#">Promociones</a></li>
                  <li><a href="#">Outlet</a></li>
              </ul>
          </nav>
      </div>
  </div>
  </header>

<!----------------- Contenido -------------------- -->    

<main>
   <div class="container">
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th>Productos</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                <?php if($productos==NULL){
                    echo `<tr><td colspan="5" class="text-center"><b>listar vacia</b></tb></tr>`;
                }else {
                    $total=0;
                    foreach ($data as $row) {
                        $id = $row['id'];
                        
                        foreach ($productos as $clave => $cantidad) {
                            if ($id == $clave) {
                                // Realizar alguna acción con la coincidencia encontrada
                                $idProducto = $row['id'];
                                $nombre=$row['title'];
                                $precio=$row['price'];
                                $descuento=$row['discountPercentage'];
                                $precioDescuento=$precio-(($precio*$descuento)/100);
                                $cantidadProducto=$cantidad;
                                $subtotal=$cantidadProducto*$precioDescuento;
                                $total +=$subtotal;
                                ?>
                                
                <tr>
                   <td><?php echo $nombre;  ?></td>
                   <td><?php echo $precioDescuento;  ?></td>
                   <td>
                        <input type="number" min="1" max="10" step="1" value="<?php echo $cantidadProducto ?>" size="5" id="cantidad_<?php echo $idProducto ;?>" onchange="" >
                   </td>
                   <td>
                        <div id="subtotal_<?php echo $idProducto;?>" name="subtotal[]" >
                            <?php echo '$'.$subtotal ?>
                        </div>
                   </td>
                   <td><a href="#" id="eliminar" class="btn btn-warning btn-sm" data-bs-id="<?php echo $idProducto; ?>" data-bs-toogle="modal" data-bs-target="eliminaModal">Eliminar</a></td> 
                  
                </tr>
                <?php } ?>
            <?php } ?>
        <?php } ?>
                 <tr>
                    <td colspan="3"></td>
                    <td colspan="2">
                        <p class="h3" id="total"><?php echo '$'.$total;?></p>
                    </td>
                 </tr>
            </tbody>
        
    <?php } ?>
        </table>
    </div>
    <div class="row">
        <div class="col-md-5 offset-md-7 d-grid gap-2">
            <button class="btn btn-primary btn-lg">Realizar pago</button>
        </div>
    </div>                        
   </div>
</main>

<!----------------- Mas Productos-------------------- -->  



<!-----------------Productos recomendados -------------------- -->    


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


 </body>


 </html>