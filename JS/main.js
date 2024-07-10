let nombreUsuario = prompt("Ingrese su nombre").toLocaleLowerCase();
nombreUsuario = nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1);
let apellidoUsuario = prompt("Ingrese su apellido").toLocaleLowerCase();
apellidoUsuario = apellidoUsuario.charAt(0).toUpperCase() + apellidoUsuario.slice(1);

let entradaModo = confirm("¿Quieres entrar al modo Vendedor?");
if (entradaModo === true) {
    let pass__modoVendedor = 1234;
    let passEntrada__modoVendedor = prompt("Ingrese la contraseña correctamente para entrar al modo vendedor"); //1234

    if (pass__modoVendedor == passEntrada__modoVendedor) {
        alert("Contraseña correcta, bienvenid@ al modo vendedor");

        // Modo Vendedor 

        class producto {
            constructor(nombre, id, precio) {
                nombre = nombre.toLowerCase()
                this.nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
                this.id = id.toUpperCase();
                this.precio = parseFloat(precio);
            }
        }
        const productos = [];
        let entrada__modoVendedor
        do {
            productos.push(
                new producto(prompt("Ingrese el nombre del producto:"),
                    prompt("Ingrese el código con el que quiere indentificar el producto: \n(El producto se seleccionará para ser comprado con este mismo)"),
                    prompt("Ingrese el precio del producto:")));
            entrada__modoVendedor = confirm("¿Quieres seguir agregando productos?")
        } while (entrada__modoVendedor === true);

        const infoProductos = productos.map((producto) => producto.id + ". " + producto.nombre + " $" + producto.precio);
        function mostrarProductos() {
            alert(infoProductos.join("\n"));
        }

        let confirm__mostrarProd = confirm("¿Quieres ver los productos ingresados?");
        if (confirm__mostrarProd === true) {
            mostrarProductos();
        }
    } else {
        alert("Contraseña incorrecta, será redirigido al modo comprador");
    }
} else {

    //Modo Comprador

    let dineroDisponible = parseFloat(prompt("¿Cuánto dinero puedes gastar?"));
    let cuponDescuento = "D612"

    alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario + " a Tienda de Electrodomésticos. \n \n A continuación te presentaremos el catálogo de nuestra tienda, pero primero, si tienes un cupón de descuento, ingresalo.");
    let cuponIngresado = prompt("Ingrese aquí su cupón").trim() //D612
    let descuento = 1
    let sumaTotal = 0

    if (cuponDescuento === cuponIngresado) {
        alert("¡Felicidades " + nombreUsuario + "!¡Tienes un descuento del 10% en el total de tu compra!")
        descuento = descuento * 0.9
    } else if (cuponDescuento != cuponIngresado) {
        alert("Lo sentimos, " + nombreUsuario + ", es cupón de descuento es incorrecto")
    }

    const productos = [
        { nombre: "Televisor LED Hitachi 43 pulgadas", id: "A1", precio: 425000 },
        { nombre: "Televisor LED Philips 55 pulgadas", id: "A2", precio: 797000 },
        { nombre: "Heladera Drean Blanca", id: "B1", precio: 660000 },
        { nombre: "Heladera Whirlpool Blanca", id: "B2", precio: 1700000 },
        { nombre: "Parlante LG Negro", id: "C1", precio: 1100000 },
        { nombre: "Parlante Potenciado Philips", id: "C2", precio: 837000 },
        { nombre: "Lavarropas Whirlpool automático 9KG", id: "D1", precio: 709000 },
        { nombre: "Lavarropas Semiatomático Columbia 10KG", id: "D2", precio: 214000 },
        { nombre: "PlayStation 5 1TB", id: "E1", precio: 1400000 },
        { nombre: "Xbox series X", id: "E2", precio: 1300000 },
    ];

    const infoProductos = productos.map((producto) => producto.id + ". " + producto.nombre + " $" + producto.precio);
    let mostrarProductos =
        infoProductos.join("\n");

    const carrito = [];
    function agregarACarrito(codigo) {
        let productoAAgregar = productos.find((producto) => producto.id === codigo);
        class productoACarrito {
            constructor(nombre, id, precio) {
                nombre = nombre.toLowerCase()
                this.nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1)
                this.id = id.toUpperCase();
                this.precio = parseFloat(precio);
            }
        }
        if (productoAAgregar) {
            carrito.push(new productoACarrito(productoAAgregar.nombre, productoAAgregar.id, productoAAgregar.precio))
        }
    }
    function agregarProducto(nombreProd, precio) {
        sumaTotal += precio;
        alert("Agregaste " + nombreProd + " al carrito.\n\nEl subtotal es de $" + sumaTotal);
    }
    function sumarPrecio(codigo) {
        const productoEncontrado = productos.find((producto) => producto.id === codigo);
        if (productoEncontrado) {
            return productoEncontrado.precio;
        }
    }
    do {
        entrada = prompt("*Para finalizar la compra ingresa ''CONFIRMAR''* \n Dinero disponible:" + dineroDisponible + " \n\n" + mostrarProductos);

        entrada = entrada.trim().toUpperCase();
        switch (entrada) {
            case "COSO":
                mostrarProductos();
                break
            case "A1":
                agregarProducto("Televisor LED Hitachi 43 pulgadas", sumarPrecio("A1"));
                agregarACarrito("A1");
                break;
            case "A2":
                agregarProducto("Televisor LED Philips 55 pulgadas", sumarPrecio("A2"));
                agregarACarrito("A2");
                break;
            case "B1":
                agregarProducto("Heladera Drean Blanca", sumarPrecio("B1"));
                agregarACarrito("B1");
                break;
            case "B2":
                agregarProducto("Heladera Whirlpool Blanca", sumarPrecio("B2"));
                agregarACarrito("B2");
                break;
            case "C1":
                agregarProducto("Parlante LG Negro", sumarPrecio("C1"));
                agregarACarrito("C1");
                break;
            case "C2":
                agregarProducto("Parlante Potenciado Philips", sumarPrecio("C2"));
                agregarACarrito("C2");
                break;
            case "D1":
                agregarProducto("Lavarropas Whirlpool automático 9KG", sumarPrecio("D1"));
                agregarACarrito("D1");
                break;
            case "D2":
                agregarProducto("Lavarropas Semiatomático Columbia 10KG", sumarPrecio("D2"));
                agregarACarrito("D2");
                break;
            case "E1":
                agregarProducto("PlayStation 5 1TB", sumarPrecio("E1"));
                agregarACarrito("E1");
                break;
            case "E2":
                agregarProducto("Xbox series X", sumarPrecio("E2"));
                agregarACarrito("E2");
                break;
            case "CONFIRMAR":
                break;
            default:
                alert("No ingresaste un código correcto");
                break;
        }
    } while (entrada !== "CONFIRMAR");

    // Mostrar el total de la compra con descuento aplicado y el último producto agregado
    total = sumaTotal * descuento;
    alert("El total de tu compra es de $" + total.toFixed(2));
    // Correcto hasta acá
    let productoDelCarrito = carrito.map((productoEnCarrito) => productoEnCarrito.id + ". " + productoEnCarrito.nombre + " $" + productoEnCarrito.precio);
    let mostrarProductosEnCarrito = productoDelCarrito.join("\n");

function eliminacionDeProducto(productoEliminado) {
    carrito.splice(productoEliminado, 1);
}
do {
    if (dineroDisponible > total) {
        alert("Felicidades, terminaste tu compra de :\n" + mostrarProductosEnCarrito)
    } else {
        let eliminarProducto = confirm("Lo sentimos, no tienes suficiente dinero. \n¿Quieres eliminar algún producto?")
        if (eliminarProducto === true) {
            let productoaeliminar = prompt("Ingresa el código del producto que quieres eliminar \n\n" + mostrarProductosEnCarrito).toUpperCase()
            function eliminarDelCarrito(codigo) {
                // Encontrar el índice del objeto con nombre igual al proporcionado
                let indice = carrito.findIndex(producto => producto.id === codigo);
                // Verificar si se encontró el objeto
                if (indice !== -1) {
                    // Usar splice para eliminar el objeto en el índice encontrado
                    carrito.splice(indice, 1);
                    console.log(`Se eliminó correctamente el producto del carrito.`);
                } else {
                    console.log(`El producto no se encontró en el carrito.`);
                }
            }
            eliminarDelCarrito(productoaeliminar)
        }
    }
} while (dineroDisponible < total) 
}