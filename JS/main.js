let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let cuponDescuento = "D612"
let A1 = 425000
let A2 = 797000
let B1 = 660000
let B2 = 1700000
let C1 = 1100000
let C2 = 837000
let D1 = 709000
let D2 = 214000
let E1 = 1400000
let E2 = 1300000
let sumaTotal = 0 
let descuento = 1
alert ("Bienvenido " + nombre + " "+ apellido + " a Tienda de Electrodomésticos. \n \n A continuación te presentaremos el catálogo de nuestra tienda, pero primero, si tienes un cupón de descuento, ingresalo.")

let cuponIngresado = prompt("Ingrese aquí su cupón")
//Cupón de descuento: Imbatible216

if(cuponDescuento === cuponIngresado ){
    alert("¡Felicidades " + nombre + "!¡Tienes un descuento del 10% en el total de tu compra!")
    descuento = descuento * 0.9
}else if (cuponDescuento != cuponIngresado){
    alert("Lo sentimos, " + nombre + ", es cupón de descuento es incorrecto")
}

function agregarProducto(nombreProducto, precio) {
    sumaTotal += precio;
    alert("Agregaste " + nombreProducto + " al carrito.\n\nEl subtotal es de $" + sumaTotal);
}

do {
    entrada = prompt("Ingresa el código del producto que quieras agregar al carrito \n \n A1. Televisor LED Hitachi 43 pulgadas ($425000) \n A2. Televisor LED Philips 55 pulgadas ($797000) \n B1. Heladera Drean Blanca ($660000) \n B2. Heladera Whirlpool Blanca ($1700000) \n C1. Parlante LG Negro ($1100000) \n C2. Parlante Potenciado Philips ($837000) \n D1. Lavarropas Whirlpool automático 9KG ($709000) \n D2. Lavarropas Semiatomático Columbia 10KG ($214000) \n E1. PlayStation 5 1TB ($1400000) \n E2. Xbox series X ($1300000) \n \n *Para finalizar la compra ingresa ''CONFIRMAR''");

    entrada = entrada.trim().toUpperCase();
    switch (entrada) {
        case "A1":
            agregarProducto("Televisor LED Hitachi 43 pulgadas", A1);
            break;
        case "A2":
            agregarProducto("Televisor LED Philips 55 pulgadas", A2);
            break;
        case "B1":
            agregarProducto("Heladera Drean Blanca", B1);
            break;
        case "B2":
            agregarProducto("Heladera Whirlpool Blanca", B2);
            break;
        case "C1":
            agregarProducto("Parlante LG Negro", C1);
            break;
        case "C2":
            agregarProducto("Parlante Potenciado Philips", C2);
            break;
        case "D1":
            agregarProducto("Lavarropas Whirlpool automático 9KG", D1);
            break;
        case "D2":
            agregarProducto("Lavarropas Semiatomático Columbia 10KG", D2);
            break;
        case "E1":
            agregarProducto("PlayStation 5 1TB", E1);
            break;
        case "E2":
            agregarProducto("Xbox series X", E2);
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