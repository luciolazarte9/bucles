/*
11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor.
*/

let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
  nombres.push(prompt(`Introduce el nombre ${i+1}:`));
  edades.push(parseInt(prompt(`Introduce la edad de ${nombres[i]}:`)));
}

let edadMayor = edades.indexOf(Math.max(...edades));

document.write(`La persona mayor es: ${nombres[edadMayor]}`);
