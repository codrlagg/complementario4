function comision(categoria, precio) {
    // let precio = parseInt(precioVenta);
    switch (categoria) {
        // Venta de celulares y smortphones 14.5%
        case "1":
            return costoCom = precio * 0.145;
            break;
            // Venta de Belleza 17.5%
        case "2":
            return costoCom = precio * 0.175;
            break;
            // Venta de Herramientas manuales 19.5%
            case "3":
                return costoCom = precio * 0.195;
                break;
        default:
            return costoCom = 0;
            break;
    }
}
function envio(pesoEnvio) {
    switch (pesoEnvio) {
        // Peso de producto menor a 0.5 kg
        case "1":
            return costoEnvio = 114;
            break;
            // Peso de producto entre 0.5 a 1 kg
        case "2":
            return costoEnvio = 125;
            break;
            // Peso de producto entre 0.5 a 1 kg
            case "3":
                return costoEnvio = 135;
                break;
                default:
            return costoEnvio = 0;
            break;
        }
        
    }
function percepcion(precio, costoCom, costoEnvio) {
    return dineroRecibido = precio - costoCom - costoEnvio;
}
// Variables globales
let costoCom = 0;
let costoEnvio = 0; 
let dineroRecibido = 0;
// Llamando a las funciones
let precioVenta = (prompt("Ingresa precio de venta"));
let precio = parseInt(precioVenta);
console.log("Precio de venta = " + precio);
let parte1 = comision(prompt("Escribe el número correspondiente de la categoría a vender: (1)Celulares y Smartphones (2)Belleza (3)Herramientas manuales"), precio);
console.log("Retención de comisión = " + parte1);
let parte2 = envio(prompt("Selecciona el peso del envio. (1)Menor a 0.5 kg (2)Entre 0.5 kg y 1 kg (3)Entre 1 kg y 2 kg"));
console.log("Costo de envío = " + parte2);
let parte3 = percepcion(precio, parseInt(parte1), parseInt(parte2));
console.log("Dinero Percibido = " + parte3);