let sumaTotal = 0;

//Array default en caso de no agregar desde el Modo Vendedor
let listaProductos;
let listaProductosHeladeras;
let listaProductosConsolas;
let listaProductosLavarropas;
let listaProductosTelevisores;
let listaProductosParlantes;

const obtenerListaProductos = async () => {
    const res = await fetch('JSON/productos.json');
    const data = await res.json();
    return data;
}
/* obtenerListaProductos().then(
console.log(obtenerListaProductos)
) */
const filtrarCategorias = (productos)=>{
    //Divisiones de array por categorías de productos
    listaProductosHeladeras = productos.filter(producto => producto.categoria === "Heladeras")
    listaProductosTelevisores = productos.filter(producto => producto.categoria === "Televisores")
    listaProductosLavarropas = productos.filter(producto => producto.categoria === "Lavarropas")
    listaProductosParlantes = productos.filter(producto => producto.categoria === "Parlantes")
    listaProductosConsolas = productos.filter(producto => producto.categoria === "Consolas")
}


const clasificarProductos = async ()=>{
    listaProductos = await obtenerListaProductos();
    filtrarCategorias(listaProductos);
}

const contenedorHeladeras = document.getElementById("carretelMostradorHeladeras")
const contenedorTelevisores = document.getElementById("carretelMostradorTelevisores")
const contenedorLavarropas = document.getElementById("carretelMostradorLavarropas")
const contenedorParlantes = document.getElementById("carretelMostradorParlantes")
const contenedorConsolas = document.getElementById("carretelMostradorConsolas")
const productosCarrito = document.getElementById("productosCarrito")
const numerosubtotal = document.getElementById("contenidoSubTotal")
const numerototal = document.getElementById("contenidoTotal")

//Página carrito


async function renderCarrito() {
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []
    const contCarrito = carrito.length
    productosCarrito.innerHTML = ``
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
}


// Interacción del usuario.


function agregarProducto(id) {
    const producto = listaProductos.find(item => item.id === id);
    const carrito = cargarCarritoLS();

    // Generar un nuevo ID para el producto
    const nuevoId = generarId(carrito);
    const nuevoProducto = { ...producto, id: nuevoId };
    
    carrito.push(nuevoProducto);
    
    localStorage.setItem("carrito", JSON.stringify(carrito));

    sumaTotal += producto.precio
    console.log(sumaTotal);
    localStorage.setItem("total", sumaTotal)

    Toastify({
        text: `Agregaste ${producto.nombre} al carrito`,
        duration: 3000,
        newWindow: false,
        destination: "../pages/carrito.html" ,
        gravity: "top",
        position: "right",
        avatar: "../assets/icons/ShoppingCart.png" ,
        className: 'notificacionDeCompra',
        offset: {
            x: 0 ,
            y:0
        },
    }).showToast();
}

function guardarCarritoLS(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function cargarCarritoLS() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}
function generarId(items) {
    let max = totalProducto();
    
    /*     items.forEach(item => {
        if (item.id > max) {
            max = item.id;
        }
        }); */
        
    return max + 1;
}
function totalProducto() {
    const carrito = cargarCarritoLS();
    return carrito.length;
}
function renderBotonCarrito() {
    let total = totalProducto();
    document.getElementById("totalCarrito").innerHTML = total;
}
function realizarCompra () {
    const carrito = cargarCarritoLS()
    sumaTotal = localStorage.getItem("total") || 0
    
    Swal.fire({
        title: "¡Compra realizada!",
        text: `Realizó su compra y abonó $` + sumaTotal,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Genial!'
    }).then((result) => {
        localStorage.removeItem("total")
        sumaTotal = 0
        localStorage.removeItem("carrito")
        carrito.splice(0,carrito.length+1)
        renderCarrito();
        sumaTotal =  0
        numerosubtotal.innerText = `SubTotal = $${sumaTotal}`;
        numerototal.innerText = `Total = $${sumaTotal}`;

    })
}
function vaciarCarrito () {
    if (carrito.length !== 0){
        Swal.fire({
            title: "Carrito vacío",
            text: 'El carrito fue vaciado correctamente',
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Genial!'
        }).then((result) => {
            sumaTotal = localStorage.getItem("total") || 0 
            localStorage.removeItem("total")
            sumaTotal = 0
            localStorage.removeItem("carrito")
            carrito.splice(0,carrito.length+1)
            renderCarrito();
            sumaTotal =  0
            numerosubtotal.innerText = `SubTotal = $${sumaTotal}`;
            numerototal.innerText = `Total = $${sumaTotal}`;
        })
    }else{
        Swal.fire({
            icon:'warning',
            title: 'Carrito Vacío',
            text: 'El carrito no contiene ningún producto',
            confirmButtonText: 'Ok'
        })
    }
}


function ordenarProductos (tipoAOrdenar){
    if (tipoAOrdenar == "heladeras") {
        // Mayor a Menor
        const criterio = document.getElementById("ordenHeladeras").value //()
        listaProductosHeladeras = listaProductosHeladeras.sort((a,b) => {
        if (criterio == "MenorAMayor") return a.precio - b. precio
        if (criterio == "MayorAMenor") return b.precio - a.precio
        })
        contenedorHeladeras.innerHTML = ``
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
    } 
    if (tipoAOrdenar == "televisores") {
        // Mayor a Menor
        const criterio = document.getElementById("ordenTelevisores").value //()
        listaProductosTelevisores = listaProductosTelevisores.sort((a,b) => {
        if (criterio == "MenorAMayor") return a.precio - b. precio
        if (criterio == "MayorAMenor") return b.precio - a.precio
        })
        contenedorTelevisores.innerHTML = ``
        listaProductosTelevisores.forEach((producto) => {
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
            contenedorTelevisores.innerHTML += productoHTML;
        });
    } 
    if (tipoAOrdenar == "lavarropas") {
        // Mayor a Menor
        const criterio = document.getElementById("ordenLavarropas").value //()
        listaProductosLavarropas = listaProductosLavarropas.sort((a,b) => {
        if (criterio == "MenorAMayor") return a.precio - b. precio
        if (criterio == "MayorAMenor") return b.precio - a.precio
        })
        contenedorLavarropas.innerHTML = ``
        listaProductosLavarropas.forEach((producto) => {
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
            contenedorLavarropas.innerHTML += productoHTML;
        });
    } 
    if (tipoAOrdenar == "parlantes") {
        // Mayor a Menor
        const criterio = document.getElementById("ordenParlantes").value //()
        listaProductosParlantes = listaProductosParlantes.sort((a,b) => {
        if (criterio == "MenorAMayor") return a.precio - b. precio
        if (criterio == "MayorAMenor") return b.precio - a.precio
        })
        contenedorParlantes.innerHTML = ``
        listaProductosParlantes.forEach((producto) => {
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
            contenedorParlantes.innerHTML += productoHTML;
        });
    } 
    if (tipoAOrdenar == "consolas") {
        // Mayor a Menor
        const criterio = document.getElementById("ordenConsolas").value //()
        listaProductosConsolas = listaProductosConsolas.sort((a,b) => {
        if (criterio == "MenorAMayor") return a.precio - b. precio
        if (criterio == "MayorAMenor") return b.precio - a.precio
        })
        contenedorConsolas.innerHTML = ``
        listaProductosConsolas.forEach((producto) => {
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
            contenedorConsolas.innerHTML += productoHTML;
        });
    } 
}
