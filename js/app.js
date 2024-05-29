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
                if (!imageFound) {
                    const img = new Image();
                    img.src = imagenUrl;
                    img.onload = () => {
                        if (img.height <= 500 && !imageFound) {
                            productosHTML += `
                                <div class="card mb-3" style="width: 50rem;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="${imagenUrl}" class="img-fluid rounded-start" alt="${objeto.title}">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">${objeto.id}</h5>
                                                <p class="card-text">${objeto.description}</p>
                                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
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

            if(objeto.id == 42 || objeto.id == 68){
                productosHTML += `
                    <div class="card mb-3" style="width: 50rem;">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src="${objeto.thumbnail}" class="img-fluid rounded-start ajustarCards100" alt="${objeto.title}">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">${objeto.id}</h5>
                                    <p class="card-text">${objeto.description}</p>
                                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                divProductos.innerHTML = productosHTML;
            }
        });

});