//Entrando al Modo Comprador
let cuponDescuento = "D612"
//Se declaran las siguientes variables para utilizarlas al terminar la compra.
let descuento = 1
let sumaTotal = 0
//Se aplica un descuento en caso de ser correcto el cupón
//Array default en caso de no agregar desde el Modo Vendedor
const listaProductos = [
    //Heladeras
    { nombre: "Heladera Cíclica GAFA Blanca 282L", id: "A1", precio: 639999, categoria: "Heladeras", ruta: "./assets/products/A1.jpg"},
    { nombre: "Heladera Gafa Plateada 374L", id: "A2", precio: 859999, categoria: "Heladeras", ruta: "./assets/products/A2.jpg" },
    { nombre: "Heladera Samsung No Frost Plateada 320L", id: "A3", precio: 1119999, categoria: "Heladeras", ruta: "./assets/products/A3.jpg" },
    { nombre: "Heladera Side by Side Samsung Plateada 801L", id: "A4", precio: 3600000, categoria: "Heladeras", ruta: "./assets/products/A4.jpg" },
    //Televisores
    { nombre: "Smart TV TCL 43 Pulgadas", id: "B1", precio: 429999 , categoria: "Televisores", ruta: "./assets/products/B1.jpg"},
    { nombre: "Smart Tv Hisense 50", id: "B2", precio: 649999 ,categoria: "Televisores", ruta: "./assets/products/B2.jpg"},
    { nombre: "Smart Tv Philips 55", id: "B3", precio: 699999 ,categoria: "Televisores", ruta: "./assets/products/B3.jpg"},
    { nombre: "Smart TV Philips 50", id: "B4", precio: 639999 ,categoria: "Televisores", ruta: "./assets/products/B4.jpg"},
    //Lavarropas
    { nombre: "Lavarropas 8kg Drean", id: "C1", precio: 899999 ,categoria: "Lavarropas", ruta: "./assets/products/C1.jpg"},
    { nombre: "Lavarropas 9.5kg Samsung", id: "C2", precio: 1169999 ,categoria: "Lavarropas", ruta: "./assets/products/C2.jpg"},
    { nombre: "Lavarropas 9kg Whirlpool", id: "C3", precio: 1299999 ,categoria: "Lavarropas", ruta: "./assets/products/C3.jpg"},
    { nombre: "Lavarropas Carga superior 11kg Whirlpool", id: "C4", precio: 999999 ,categoria: "Lavarropas", ruta: "./assets/products/C4.jpg"},
    //Parlantes
    { nombre: "Parlante Portátil Bluetooth JBL Negro", id: "D1", precio: 149999 ,categoria: "Parlantes", ruta: "./assets/products/D1.jpg"},
    { nombre: "Amazon Echo Dot Azul", id: "D2", precio: 129999 ,categoria: "Parlantes", ruta: "./assets/products/D2.jpg"},
    { nombre: "Xiaomi Mi Outdoor Negro", id: "D3", precio: 45999 ,categoria: "Parlantes", ruta: "./assets/products/D3.jpg"},
    { nombre: "Parlante Yison Tactil Blanco", id: "D4", precio: 69999 ,categoria: "Parlantes", ruta: "./assets/products/D4.jpg"},
    //Consolas de videojuegos
    { nombre: "Nintendo Switch Oled 64Gb ", id: "E1", precio: 644700 ,categoria: "Consolas", ruta: "./assets/products/E1.jpg"},
    { nombre: "Xbox Series S 1TB", id: "E2", precio: 844200 ,categoria: "Consolas", ruta: "./assets/products/E2.jpg"},
    { nombre: "Xbox Series X", id: "E3", precio: 1273999 ,categoria: "Consolas", ruta: "./assets/products/E3.jpg"},
    { nombre: "Sony Playstation 5 1TB", id: "E4", precio: 1258700 ,categoria: "Consolas", ruta: "./assets/products/E4.jpg"}
];
//Divisiones de array por categorías de productos
listaProductosHeladeras = listaProductos.filter(producto => producto.categoria === "Heladeras")
listaProductosTelevisores = listaProductos.filter(producto => producto.categoria === "Televisores")
listaProductosLavarropas = listaProductos.filter(producto => producto.categoria === "Lavarropas")
listaProductosParlantes = listaProductos.filter(producto => producto.categoria === "Parlantes")
listaProductosConsolas = listaProductos.filter(producto => producto.categoria === "Consolas")

const contenedorHeladeras = document.getElementById("carretelMostradorHeladeras")
const contenedorTelevisores = document.getElementById("carretelMostradorTelevisores")
const contenedorLavarropas = document.getElementById("carretelMostradorLavarropas")
const contenedorParlantes = document.getElementById("carretelMostradorParlantes")
const contenedorConsolas = document.getElementById("carretelMostradorConsolas")
const productosCarrito = document.getElementById("productosCarrito")
const numerosubtotal = document.getElementById("contenidoSubTotal")
const numerototal = document.getElementById("contenidoTotal")


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
        duration: 300000,
        newWindow: false,
        destination: "../pages/carrito.html" ,
        gravity: "top",
        position: "right",
        avatar: "../assets/icons/cart-70-24.png" ,
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
    const mapeo = carrito.map((producto) => {producto.id + ". " + producto.nombre + "\n" })
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
        location.reload()
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
            location.reload()
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