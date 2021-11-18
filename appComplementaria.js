function calculadora(operacion, numUno, numDos) {
    let var1 = parseInt(numUno);
    let var2 = parseInt(numDos);
    switch (operacion) {
        case "1":
            return var1 + var2;
            break;
        case "2":
            return var1 - var2;
            break;
        case "3":
            return var1 * var2;
            break;
        case "4":
            return var1 / var2;
            break;1
        default:
            return 0;
            break;
    }
}

let resultado = calculadora(prompt("Escribe el número correspondiente a la operación a realizar: (1)Suma (2)Resta (3)Multiplicación (4)División"), prompt("Ingresa el primer número"), prompt("Ingresa el segundo número"));
console.log(resultado);