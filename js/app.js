document.addEventListener("DOMContentLoaded", () => {
    let ObjTienda = JSON.parse(productos); //convertir a un arreglo
        let productosHTML = "";
        ObjTienda.forEach((objeto) => {
            productosHTML += `
            <div class="container">
                        <div class="card w-75 h-75">
                        <img src="${objeto.thumbnail}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${objeto.title}</h5>
                                
                            </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>
                            <div class="card-body">
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>
            </div>
            
            `;
        });

        let divProductos = document.querySelector("div#productos");
        divProductos.innerHTML = productosHTML;
});

// document.addEventListener("DOMContentLoaded", () => {
//     let ObjTienda = JSON.parse(productos);
//     console.log(ObjTienda)
//     let max = ObjTienda[0].discountPercentage;
//     ObjTienda.forEach((objeto) => {
//         console.log(objeto.discountPercentages)
//         if (objeto.discountPercentage > max) {
//             max = objeto.discountPercentage
//         }
//         console.log(max)
        
//     });
// });