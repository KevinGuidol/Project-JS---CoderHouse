//Se declaran nombre y apellido
let nombreUsuario = prompt("Ingrese su nombre").toLocaleLowerCase();
nombreUsuario = nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1);
let apellidoUsuario = prompt("Ingrese su apellido").toLocaleLowerCase();
apellidoUsuario = apellidoUsuario.charAt(0).toUpperCase() + apellidoUsuario.slice(1);

//Se da a elegir entre "Modo Comprador" o "Modo Vendedor"
let entradaModo = confirm("¿Quieres entrar al modo Vendedor?");
if (entradaModo === true) {
    let pass__modoVendedor = 1234;
    let passEntrada__modoVendedor = prompt("Ingrese la contraseña correctamente para entrar al modo vendedor"); //1234

    if (pass__modoVendedor == passEntrada__modoVendedor) {
        alert("Contraseña correcta, bienvenid@ al modo vendedor");

        //Entrando al Modo Vendedor 

        //Constructor de el producto para ser agregado (ID,nombre,precio)
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
            //Se agregan los valores al producto mediante prompt's(ID,nombre,precio)
            productos.push(
                new producto(prompt("Ingrese el nombre del producto:"),
                    prompt("Ingrese el código con el que quiere indentificar el producto: \n(El producto se seleccionará para ser comprado con este mismo)"),
                    prompt("Ingrese el precio del producto:")));
            entrada__modoVendedor = confirm("¿Quieres seguir agregando productos?")
        } while (entrada__modoVendedor === true);
        //Lee cada producto del array "Productos" y lo muestra mediante la funcion "mostrarProductos()" 
        const infoProductos = productos.map((producto) => producto.id + ". " + producto.nombre + " $" + producto.precio);
        function mostrarProductos() {
            alert(infoProductos.join("\n"));
        }

        let confirm__mostrarProd = confirm("¿Quieres ver los productos ingresados?");
        if (confirm__mostrarProd === true) {
            mostrarProductos();
        }
    }
    else {
        alert("Contraseña incorrecta.");
    }
} else {

    //Entrando al Modo Comprador

    let dineroDisponible = parseFloat(prompt("¿Cuánto dinero puedes gastar?"));
    let cuponDescuento = "D612"

    alert("Bienvenido " + nombreUsuario + " " + apellidoUsuario + " a Tienda de Electrodomésticos. \n \n A continuación te presentaremos el catálogo de nuestra tienda, pero primero, si tienes un cupón de descuento, ingresalo.");
    let cuponIngresado = prompt("Ingrese aquí su cupón").trim() //D612
    //Se declaran las siguientes variables para utilizarlas al terminar la compra.
    let descuento = 1
    let sumaTotal = 0
    //Se aplica un descuento en caso de ser correcto el cupón
    if (cuponDescuento === cuponIngresado) {
        alert("¡Felicidades " + nombreUsuario + "!¡Tienes un descuento del 10% en el total de tu compra!")
        descuento = descuento * 0.9
    } else if (cuponDescuento != cuponIngresado) {
        alert("Lo sentimos, " + nombreUsuario + ", es cupón de descuento es incorrecto")
    }
    //Array default en caso de no agregar desde el Modo Vendedor
    const listaProductos = [
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
    //Lee cada producto del array "Productos" y lo muestra mediante la funcion "mostrarProductos()" 
    const infoProductos = listaProductos.map((producto) => producto.id + ". " + producto.nombre + " $" + producto.precio);
    let mostrarProductos =
        infoProductos.join("\n");

    const carrito = [];

    //Encuentra el producto, reconoce su nombre, ID y precio mediante el código ingresado para agregarlo al array "carrito".
    function agregarACarrito(codigo) {
        let productoAAgregar = listaProductos.find((producto) => producto.id === codigo);
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
    //Se suma el precio del producto al precio total.
    function agregarProducto(nombreProd, precio) {
        sumaTotal += precio;
        alert("Agregaste " + nombreProd + " al carrito.\n\nEl subtotal es de $" + sumaTotal);
    }
    //Se restar el precio del producto al precio total.
    function eliminarProducto(nombreProd, precioProd) {
        sumaTotal -= precioProd;
        alert("Eliminaste " + nombreProd + " del carrito.\n\nEl subtotal es de $" + sumaTotal);
    }//Busca el código introducido en el array listaProductos y devuelve el valor del precio del mismo.
    function encontrarPrecioProducto(codigo) {
        const productoEncontrado = listaProductos.find((producto) => producto.id === codigo);
        if (productoEncontrado) {
            return productoEncontrado.precio;
        }
    }
    function encontrarNombreProducto(codigo) {
        const productoEncontrado = listaProductos.find((producto) => producto.id === codigo);
        if (productoEncontrado) {
            return productoEncontrado.nombre
        }
    }
    //Lee cada producto del array "carrito" y lo muestra mediante la funcion "mostrarProductosEnCarrito()" 
    function mostrarProductosEnCarrito() {
        let productoDelCarrito = carrito.map((productoEnCarrito) => productoEnCarrito.id + ". " + productoEnCarrito.nombre + " $" + productoEnCarrito.precio);
        return productoDelCarrito.join("\n");
    }
    do {
        //El código que introduce es recibido por la variable "entrada", es convertido el mayúscula y se eliminan los espacio
        //Ingresando "confirmar", se confirma la compra, pasan a el precio con descuento.
        entrada = prompt("*Para finalizar la compra ingresa ''CONFIRMAR''* \n Dinero disponible: " + dineroDisponible + " \n\n" + mostrarProductos);
        entrada = entrada.trim().toUpperCase();
        switch (entrada) {
            case "A1":
                agregarProducto("Televisor LED Hitachi 43 pulgadas", encontrarPrecioProducto("A1"));
                agregarACarrito("A1");
                break;
            case "A2":
                agregarProducto("Televisor LED Philips 55 pulgadas", encontrarPrecioProducto("A2"));
                agregarACarrito("A2");
                break;
            case "B1":
                agregarProducto("Heladera Drean Blanca", encontrarPrecioProducto("B1"));
                agregarACarrito("B1");
                break;
            case "B2":
                agregarProducto("Heladera Whirlpool Blanca", encontrarPrecioProducto("B2"));
                agregarACarrito("B2");
                break;
            case "C1":
                agregarProducto("Parlante LG Negro", encontrarPrecioProducto("C1"));
                agregarACarrito("C1");
                break;
            case "C2":
                agregarProducto("Parlante Potenciado Philips", encontrarPrecioProducto("C2"));
                agregarACarrito("C2");
                break;
            case "D1":
                agregarProducto("Lavarropas Whirlpool automático 9KG", encontrarPrecioProducto("D1"));
                agregarACarrito("D1");
                break;
            case "D2":
                agregarProducto("Lavarropas Semiatomático Columbia 10KG", encontrarPrecioProducto("D2"));
                agregarACarrito("D2");
                break;
            case "E1":
                agregarProducto("PlayStation 5 1TB", encontrarPrecioProducto("E1"));
                agregarACarrito("E1");
                break;
            case "E2":
                agregarProducto("Xbox series X", encontrarPrecioProducto("E2"));
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
    do {
        if (total > dineroDisponible) {
            alert("Lo sentimos, no tienes suficiente dinero para realizar la compra");
            let codigo = prompt("Ingrese el código del producto que quiera eliminar \n\n" + mostrarProductosEnCarrito()).toUpperCase();
            eliminarProducto(encontrarNombreProducto(codigo),encontrarPrecioProducto(codigo));
        }else {
            alert("Felicidades, compraste :\n\n" + mostrarProductosEnCarrito());
        }
    } while (total > dineroDisponible)
}