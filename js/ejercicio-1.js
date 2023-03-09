/*
1-Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
*/

let edad;
let validar = false;
 while (!validar) {
    edad = prompt("Introduce una edad");
    if (isNaN(edad)) {
        alert("Introduce una edad valida");
    } else if (edad < 0 || edad > 120) {
        alert("Ingrese una edad entre 0 y 120 años");
    } else {
        validar = true;
    }
 }

let mensaje;
if (edad >= 18 && edad <=100) {
  mensaje = "puedes manejar";
} else {
  mensaje = "no puedes manejar"
}

alert(`A esta edad ${mensaje}`)
