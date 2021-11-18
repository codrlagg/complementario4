function calculadora(numUno, numDos, operacion) {
    switch (operacion) {
        case "1":
            return numUno + numDos;
            break;
        case "2":
            return numUno - numDos;
            break;
        case "3":
            return numUno * numDos;
            break;
        case "4":
            return numUno / numDos;
            break;
        default:
            return 0;
            break;
    }
}

let resultado = calculadora(prompt("Ingresa el primer número"), prompt("Ingresa el segundo número"), prompt("Escribe el número correspondiente a la operación a realizar: (1)Suma (2)Resta (3)Multiplicación (4)División"));
console.log(resultado);