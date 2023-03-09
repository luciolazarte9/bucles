/*
17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
*/

let texto = prompt("Introduce un texto").search(/[aeiou]/i);
document.write(`La primera vocal esta en la posicion ${texto + 1} del texto.`);
