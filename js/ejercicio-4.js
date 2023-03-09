/*
4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let suma = 0;

while (true) {
    let numeros = prompt("Ingresa un numero");
    if (numeros === null) {
        break;
    }
    numeros = parseFloat(numeros);

    if(isNaN(numeros)) {
        alert("No es un numero");
    }

    suma += numeros;
}

alert(`La suma total es ${suma}`);