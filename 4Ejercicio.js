var km = Number (prompt("Ingrese el numero de Kilometros recorridos: "));
var galones = parseFloat (prompt("Ingrese el numero de galones :"));

var consumo = km / galones;
var resultado = ("El consumo de Kilometros por galones es: " + consumo);
console.log(resultado);
