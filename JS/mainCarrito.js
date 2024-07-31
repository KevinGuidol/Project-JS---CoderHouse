carrito.forEach(producto => {
    const carritoHTML = `
                <div class="contenedorItemsCarrito">
                    <div class="imgProductoCarrito"><img src="${producto.ruta}" alt=""></div>
                    <div class="nombreProductoCarrito"><p>${producto.nombre}</p></div>
                    <div class="categoriaProductoCarrito"><h2>${producto.categoria}</h2></div>
                    <div class="precioProductoCarrito"><h2>${producto.precio}</h2></div>
            </div>
            `;
            contenedorCarrito.innerHTML += carritoHTML
}); 