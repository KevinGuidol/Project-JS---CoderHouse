//Entrando al Modo Comprador
let cuponDescuento = "D612"
//Se declaran las siguientes variables para utilizarlas al terminar la compra.
let descuento = 1
let sumaTotal = 0
//Se aplica un descuento en caso de ser correcto el cupón
//Array default en caso de no agregar desde el Modo Vendedor

const listaProductos = 
    fetch('/JSON/productos.json')
        .then((res) => res.json())
        .then((data) => {
            const listaProductos = JSON.parse(data)
            return listaProductos
        })


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

/* const pedirPosts = async () => {
const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await resp.json()
console.log(data.find((noticia) => noticia.id === 1)) 
}
pedirPosts()
 */




const lista = document.querySelector('#listado')

function postearEnApi (nuevoProducto) {
    
    const producto = JSON.stringify(nuevoProducto)

    fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method: 'POST',
            body: JSON.stringify({
                title: 'Coderhouse',
                body: producto,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            const obj = JSON.parse(data.body)
            console.log(obj.map((el) =>`Nombre: ${el.nombre}, País: ${el.pais}, Provincia: ${el.provincia}, Edad: ${el.edad} Años`));
            
        })
}
//    Prueba postearEnApi
postearEnApi([{nombre:'Kevin', provincia:'Mendoza', pais:'Argentina',edad:22}])



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
