/*3-Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
*/

let textos = [];

while (true) {
  if (confirm("Vas a ingresar mas texto?")) {
    let texto = prompt("Ingresa una cadena de texto");
    if (texto !== null) {
      textos.push(texto);
    }
  } else {
    break;
  }
}

if (textos.length > 0) {
  let textoSeparado = textos.join("-");
  document.write(textoSeparado);
} else {
  alert("No se ingreso una cadena de texto");
}
