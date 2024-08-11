const carrito = JSON.parse(localStorage.getItem("carrito")) || []
const contCarrito = carrito.length
    if (contCarrito != 0) {
        for (producto of carrito) {
        productosCarrito.innerHTML += `
        <div class="contenedorItemsCarrito">
            <div class="imgProductoCarrito"><img src=".${producto.ruta}" alt=""></div>
            <div class="nombreProductoCarrito"><p>${producto.nombre}</p></div>
            <div class="categoriaProductoCarrito"><h2>${producto.categoria}</h2></div>
            <div class="precioProductoCarrito"><h2>$${producto.precio}</h2></div>
        </div>
        `;
            sumaTotal = localStorage.getItem("total") || 0
            numerosubtotal.innerText = `SubTotal = $${sumaTotal}`;
            numerototal.innerText = `Total = $${sumaTotal}`;
        }
    }else {
        productosCarrito.innerHTML = `
<h2 id="noProductos">no hay ningún producto en el carrito</h2>
`;
    }
