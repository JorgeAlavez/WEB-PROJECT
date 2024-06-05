document.addEventListener("DOMContentLoaded", () => {
    let ObjTienda = JSON.parse(productos); //convertir a un arreglo
    
   

    //*************************************************** */
        // let productosHTML = "";
        // ObjTienda.forEach((objeto) => {
        //     if(objeto.id == 24 || objeto.id == 29 || objeto.id == 70 || objeto.id == 42 ){
        //         productosHTML += `
        //         <div class="card mb-3" style="width: 50rem;">
        //             <div class="row g-0">
        //                 <div class="col-md-4">
        //                     <img src="${objeto.thumbnail}" class="img-fluid rounded-start ajustarCards100" alt="...">
        //                 </div>
        //                 <div class="col-md-8">
        //                     <div class="card-body">
        //                         <h5 class="card-title">Card title</h5>
        //                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //                         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
            
        //     `;
        //     }
        //     else{
        //         productosHTML += `
        //         <div class="card mb-3" style="width: 50rem;">
        //             <div class="row g-0">
        //                 <div class="col-md-4">
        //                     <img src="${objeto.images[0]}" class="img-fluid rounded-start" alt="...">
        //                 </div>
        //                 <div class="col-md-8">
        //                     <div class="card-body">
        //                         <h5 class="card-title">Card title</h5>
        //                         <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //                         <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     `;
        //     }
        
        let productosHTML = "";
        let divProductos = document.querySelector("div#productos");
        ObjTienda.forEach(objeto => {
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
                                <button class="boton-card">Ver Detalles</button>
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

            // if(objeto.id == 42 || objeto.id == 68){
            //     productosHTML += `
            //     <div class="col">
            //     <div class="card h-100">
            //       <img src="${imagenUrl}" class="card-img-top" alt="...">
            //       <div class="card-body">
            //         <h5 class="card-title">${objeto.id}</h5>
            //         <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            //       </div>
            //     </div>
            //   </div>
            //     `;
            //     divProductos.innerHTML = productosHTML;
            // }
        });

        const starTotal = 5;

        ObjTienda.forEach(objeto => {
          const starPercentage = (objeto.rating / starTotal) * 100;
          const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
          document.querySelector(`.estrella${objeto.id} .stars-inner`).style.width = starPercentageRounded;
           
        });

});

