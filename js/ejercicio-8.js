/*
8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
……

*/

let repeticiones = parseInt(prompt("Ingrese un número del 1 al 50"));

if (repeticiones > 0 && repeticiones <= 50) {
  for (let fila = 1; fila <= repeticiones; fila++) {
    let cadena = '';
    for (let columna = 1; columna <= fila; columna++) {
      cadena += columna;
    }
    document.write(cadena + "<br>");
  }
} else {
  alert("Ingresaste una opción inválida");
}
