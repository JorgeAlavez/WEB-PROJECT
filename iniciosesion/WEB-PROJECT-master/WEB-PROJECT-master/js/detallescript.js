$(document).ready(()=>{

let objTienda = JSON.parse(productos);
let idobjeto = 2;
let productosHTML = "";
objTienda.forEach(objeto => {
    if(objeto.id==idobjeto){
    let descuento =objeto.price- (objeto.price*objeto.discountPercentage/100) ;
    productosHTML += `
    <br>
    <br>
    <br>
    <div class="container">
        <div class="row">
           <div class="col-md-6 order-md-1 ">
           <div id="carouseltienda" class="carousel slide carousel-fade">
           <div class="carousel-inner">
             <div class="carousel-item active">
               <img src="${objeto.images[1]}" class="d-block w-100" >
             </div>
             <div class="carousel-item">
               <img src="${objeto.images[2]}" class="d-block w-100" >
             </div>
             <div class="carousel-item">
               <img src="${objeto.images[3]}" class="d-block w-100" >
             </div>
           </div>
           <button class="carousel-control-prev" type="button" data-bs-target="#carouseltienda" data-bs-slide="prev">
             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Previous</span>
           </button>
           <button class="carousel-control-next" type="button" data-bs-target="#carouseltienda" data-bs-slide="next">
             <span class="carousel-control-next-icon" aria-hidden="true"></span>
             <span class="visually-hidden">Next</span>
           </button>
         </div>
        

           </div>
           <div class="col-md-6 order-md-2  ">
                <h1>${objeto.title}</h2>

                <p>
                    Precio en lista $
                    <del> 
                      ${objeto.price}
                    </del>
                </p>

                <h2> 
                    <small class="text-success">- ${objeto.discountPercentage}  %  </small>
                    $${descuento}
                </h2>
                <h6> 
                    Disponibilidad de ${objeto.stock} unidades
                </h6>
                <p class="lead">${objeto.description} </p>
                <div class="d-grid gap-3 col-8 mx-auto ">
                    <button class="btn btn-primary" type"button"> Comprar ahora </button>
                    <button class="btn btn-outline-primary" type"button"> Agregar al carrito </button>
                    
                </div>

           </div>
        </div>
    </div>
    <br>
    
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h2>Especificaciones</h2>
                <table class="table">
                    <tbody>
                        <tr>
                            <th scope="row">
                                Nombre del producto
                            </th>
                            <td>${objeto.title}</td>
                        </tr>
                        <tr>
                            <th scope="row">
                                Marca
                            </th>
                            <td>${objeto.brand}</td>
                        </tr>
                            <th scope="row">
                                Categoria
                            </th>
                            <td>${objeto.category}</td>
                        </tr>
                            <th scope="row">
                                Precio actual
                            </th>
                            <td>$ ${objeto.price}</td>
                        </tr>
                            <th scope="row">
                                Descripcion
                            </th>
                            <td>${objeto.description}</td>
                        </tr>
                            
                    </tbody>
                </table>
            </div>
        </div>  
    </div>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    </br>
    `;
    }
});
// Elementos randoms para mostrar,
// Cambiar por otro metodo de randomizacion si falla
let min = 1;
let max = 100;
let R1 = Math.floor(Math.random() * (max - min + 1)) + min;
let R2 = Math.floor(Math.random() * (max - min + 1)) + min;
let R3 = Math.floor(Math.random() * (max - min + 1)) + min;
let R4 = Math.floor(Math.random() * (max - min + 1)) + min;

$("div#verProductos").html(productosHTML);


        let catalogoHTML = "";
        let divProductos = document.querySelector("div#productos");// vemos
        objTienda.forEach(objeto => {
            if(R1==objeto.id||R2==objeto.id||R3==objeto.id||R4==objeto.id){
            let imageFound = false; // Flag para indicar si se ha encontrado una imagen válida
            console.log("a");
            objeto.images.forEach(imagenUrl => {
                let precioDescuento = 0;
                if (!imageFound) {
                    const img = new Image();
                    img.src = imagenUrl;
                    img.onload = () => {
                        if (img.height <= 1000 && !imageFound) {
                            calculoDescuento = (objeto.price)*(1-(objeto.discountPercentage/100))
                            precioDescuento = Math.round(calculoDescuento)
                            objeto.discountPercentage = Math.round(objeto.discountPercentage)
                            catalogoHTML += `
                            </br>

                            <div class="col">
                            <div class="card h-100 border-info mb-20" style="width: 330px;">
                              <div class="contenedorImagen">
                                <img src="${imagenUrl}" class=" imagenCard card-img-top" alt="...">
                                <div class="overlay">
                                  <button class="btn btn-outline-secondary btn-sm"><i class="fas fa-cart-plus mr-2"></i>
                                  Añadir al carrito</button>
                                </div>
                              </div>
                              <div class="card-body">
                                <h5 class="card-title">${objeto.title}</h5>
                                <p class="card-text">
                                  <div class="stars-outer">
                                    <div class="stars-inner estrella${objeto.id}"></div>
                                  </div>
                                </p>
                                <p class="card-text precioCard">$ ${objeto.price}</p>
                                <p class="card-text descuentoCard">Descuento: ${objeto.discountPercentage}%</p>
                                <p class="card-text preciodescuentoCard">Precio final: $${precioDescuento}</p>
                              </div>
                            </div>
                          </div>
                            `;
                            divProductos.innerHTML = catalogoHTML;
                            imageFound = true; // Actualizar flag indicando que se encontró una imagen válida
                        }
                    };
                }
                
            });

        }
        });

        const starTotal = 5;

        objTienda.forEach(objeto => {
          const starPercentage = (objeto.rating / starTotal) * 100;
          const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
          document.querySelector(`.estrella${objeto.id} .stars-inner`).style.width = starPercentageRounded;
           
        });

});// final
