async function renderProductos (){

    await clasificarProductos();
    
    listaProductosHeladeras.forEach((producto) => {
        const productoHTML = `
            </div>
            <article class="item">
                <button type="button" value="coso" onclick="agregarProducto('${producto.id}')"class="shoppingButton" ><img src="./assets/icons/ShoppingButton.png" alt=""></button>
                <div class="contenedorProducto">
                    <img src="${producto.ruta}" alt="">
                    <p class="descripcionProducto">${producto.nombre}</p>
                    <h2 class="precioProducto">$${producto.precio}</h2>
                </div>
            </article>
        `;
        contenedorHeladeras.innerHTML += productoHTML;
    });
    
    listaProductosTelevisores.forEach((producto) => {
        const productoHTML = `
            </div>
            <article class="item">
                <button type="button" value="coso" onclick="agregarProducto('${producto.id}')" class="shoppingButton"><img src="./assets/icons/ShoppingButton.png" alt=""></button>
                <div class="contenedorProducto">
                    <img src="${producto.ruta}" alt="">
                    <p class="descripcionProducto">${producto.nombre}</p>
                    <h2 class="precioProducto">$${producto.precio}</h2>
                </div>
            </article>
        `;
        contenedorTelevisores.innerHTML += productoHTML;
    });
    
    listaProductosLavarropas.forEach((producto) => {
        const productoHTML = `
            </div>
            <article class="item">
                <button type="button" value="coso" onclick="agregarProducto('${producto.id}')" class="shoppingButton"><img src="./assets/icons/ShoppingButton.png" alt=""></button>
                <div class="contenedorProducto">
                    <img src="${producto.ruta}" alt="">
                    <p class="descripcionProducto">${producto.nombre}</p>
                    <h2 class="precioProducto">$${producto.precio}</h2>
                </div>
            </article>
        `;
        contenedorLavarropas.innerHTML += productoHTML;
    });
    
    listaProductosParlantes.forEach((producto) => {
        const productoHTML = `
            </div>
            <article class="item">
                <button type="button" value="coso" onclick="agregarProducto('${producto.id}')" class="shoppingButton"><img src="./assets/icons/ShoppingButton.png" alt=""></button>
                <div class="contenedorProducto">
                    <img src="${producto.ruta}" alt="">
                    <p class="descripcionProducto">${producto.nombre}</p>
                    <h2 class="precioProducto">$${producto.precio}</h2>
                </div>
            </article>
        `;
        contenedorParlantes.innerHTML += productoHTML;
    });
    
    listaProductosConsolas.forEach((producto) => {
        const productoHTML = `
            </div>
            <article class="item">
                <button type="button" value="coso" onclick="agregarProducto('${producto.id}')" class="shoppingButton"><img src="./assets/icons/ShoppingButton.png" alt=""></button>
                <div class="contenedorProducto">
                    <img src="${producto.ruta}" alt="">
                    <p class="descripcionProducto">${producto.nombre}</p>
                    <h2 class="precioProducto">$${producto.precio}</h2>
                </div>
            </article>
        `;
        contenedorConsolas.innerHTML += productoHTML;
    });
}

renderProductos();