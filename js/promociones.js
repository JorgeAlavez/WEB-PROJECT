document.addEventListener("DOMContentLoaded", () => {
    let ObjTienda = JSON.parse(productos); //convertir a un arreglo
    // Ordenar los productos por porcentaje de descuento en orden descendente
    ObjTienda.sort((a, b) => b.discountPercentage - a.discountPercentage);
    
    // Seleccionar los primeros 10 productos
    let topProductos = ObjTienda.slice(0, 15);
   

    //*************************************************** */
 
        
let productosHTML = "";
let divProductos = document.querySelector("div#productos");
  topProductos.forEach(objeto => {
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
                              
          <div class="col-md-4">
          <div class="card h-100" class="border-succes mb-3" style="min-width: 79%;">
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

const starTotal = 5;
ObjTienda.forEach(objeto => {
  const starPercentage = (objeto.rating / starTotal) * 100;
  const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
  document.querySelector(`.estrella${objeto.id} .stars-inner`).style.width = starPercentageRounded;   
  });

});