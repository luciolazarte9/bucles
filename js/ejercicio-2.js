/*2-Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
*/


let nota;
let validar = false;

while(!validar) {
    nota = prompt("Introduce tu nota (de 0 a 10)");
    if (isNaN(nota)) {
        alert("Introduce un numero valido");
    } else if (nota < 0 || nota > 10) {
        alert("Numero equivocado (las calificaciones son de 0 a 10)");
    } else {
        validar = true;
    }
}

let calificacion;
if (nota >= 0 && nota <= 2) {
  calificacion = "Muy deficiente";
} else if (nota >= 3 && nota <= 4) {
  calificacion = "Insuficiente";
} else if (nota >= 5 && nota <= 6) {
  calificacion = "Suficiente";
} else if (nota == 7) {
  calificacion = "Buena";
} else if (nota >= 8 && nota <= 9) {
  calificacion = "Notable";
} else {
  calificacion = "Sobresaliente";
}

alert(`Tu calificación es ${calificacion}`);
