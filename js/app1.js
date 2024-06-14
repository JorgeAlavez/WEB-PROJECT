document.addEventListener("DOMContentLoaded", () => {
    let ObjTienda = JSON.parse(productos); //convertir a un arreglo
    
   

    //************************INSERTAR LOS 100 PRODUCTOS*************************** */
 
        
let productosHTML = "";
let divProductos = document.querySelector("div#productos");
  ObjTienda.forEach(objeto => {
    console.log(objeto.category)
    let imageFound = false; // Flag para indicar si se ha encontrado una imagen válida
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
          productosHTML += `
                              
          <div class="col-md-4 my-5">
          <div class="card h-100 border-dark" class="border-succes mb-3" style="min-width: 79%;">
           <div class="contenedorImagen">
              <img src="${imagenUrl}" class=" imagenCard card-img-top" alt="...">
              <div class="overlay">
              <button class="btn btn-outline-secondary btn-sm"><i class="fas fa-cart-plus mr-2"></i>
              Añadir al carrito</button>
              </div>
           </div>
           <div class="card-body">
             <h5 class="card-title"><a href="#" class="enlaceIndividual">${objeto.title}</a></h5>
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
        divProductos.innerHTML = productosHTML;
        imageFound = true; // Actualizar flag indicando que se encontró una imagen válida
        }
      };
    }
  });
});

// const starTotal = 5;
// ObjTienda.forEach(objeto => {
//   const starPercentage = (objeto.rating / starTotal) * 100;
//   const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
//   document.querySelector(`.estrella${objeto.id} .stars-inner`).style.width = starPercentageRounded;   
//   });




  function displayProducts(products) {
    let productosHTML = "";
    products.forEach(objeto => {
      console.log(objeto.category)
        let imageFound = false;
        objeto.images.forEach(imagenUrl => {
            if (!imageFound) {
                const img = new Image();
                img.src = imagenUrl;
                img.onload = () => {
                    if (img.height <= 1000 && !imageFound) {
                        const calculoDescuento = (objeto.price) * (1 - (objeto.discountPercentage / 100));
                        const precioDescuento = Math.round(calculoDescuento);
                        objeto.discountPercentage = Math.round(objeto.discountPercentage);

      

                        productosHTML += `
                            <div class="col-md-4 my-3">
                                <div class="card my-3 h-100 border-dark" class="border-succes mb-3" style="min-width: 79%;">
                                    <div class="contenedorImagen">
                                    
                                        <img src="${imagenUrl}" class="imagenCard card-img-top" alt="...">
                                        <div class="overlay">
                                            <button class="btn btn-outline-secondary btn-sm">
                                                <i class="fas fa-cart-plus mr-2"></i>Añadir al carrito
                                            </button>
                                        </div>
                                    </div>
                                   
                                    <div class="card-body">
                                        <h5 class="card-title"><a href="#" class="enlaceIndividual">${objeto.title}</a></h5>
                                        
                                        <p class="card-text">
                                            
                                        </p>
                                        <p class="card-text precioCard">$ ${objeto.price}</p>
                                        <p class="card-text descuentoCard">Descuento: ${objeto.discountPercentage}%</p>
                                        <p class="card-text preciodescuentoCard">Precio final: $${precioDescuento}</p>
                                    </div>
                                </div>
                            </div>               
                        `;
                        divProductos.innerHTML = productosHTML;
                        imageFound = true;
                    }
                };
            }
        });
        
    
      document.getElementById('productos').innerHTML = productosHTML;
        
    });

}



const searchBar = document.querySelector("#searchBar");
const searchButton = document.querySelector("#searchButton");

searchButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the form from submitting which would refresh the page
    const searchString = searchBar.value.toLowerCase();
    const filteredProducts = ObjTienda.filter(product => {
        return product.title.toLowerCase().includes(searchString);
    });
    displayProducts(filteredProducts);
    console.log(filteredProducts);
});


window.addEventListener('scroll', function() {
    if (window.innerWidth >= 1000) {
    var header = document.querySelector('.contenido-header');
    // var navbar = document.querySelector('.navbar');
    var section = document.querySelector('.tituloNuestrosProductos');
  
    var sectionPosition = section.getBoundingClientRect().top + window.scrollY;
  
    if (window.scrollY > sectionPosition) {
      header.style.position = 'absolute';
      header.style.top = `${sectionPosition}px`;
     
    } else {
      header.style.position = 'fixed';
      header.style.top = '0';
      
    }
    }
  });

  


});

