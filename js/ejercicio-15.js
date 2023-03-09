/*
15- Realiza un script que cuente el número de vocales que tiene un texto.
*/

let cadena = prompt("Introduce un de texto").match(/[aeiou]/gi);
document.write(`El numero de vocales en el texto es ${cadena.length}`);
