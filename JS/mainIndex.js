listaProductosHeladeras.forEach((producto, index) => {
    const productoHTML = `
        <!-- ${producto.categoria} -->
        <div class="categoriaYOrden">
            <h2 class="categoria">${producto.categoria}</h2>
            <select name="" id="sortOptions${index + 1}" onchange="" class="sortOptions">
                <option value="default">Default</option>
                <option value="MenorAMayor">Menor a mayor</option>
                <option value="MayorAMenor">Mayor a menor</option>
            </select>
        </div>
        <section class="carretelMostrador" id="${index + 1}">
        <article class="item">
            <button class="shoppingButton"><img src="../assets/icons/ShoppingButton.png" alt=""></button>
            <div class="contenedorProducto">
                <img src="${producto.ruta}" alt="">
                <p class="descripcionProducto">${producto.nombre}</p>
                <h2 class="precioProducto">$${producto.precio}</h2>
            </div>
        </article>
        </section>
    `;
    console.log(productoHTML);
    contenedor.innerHTML += productoHTML;
});