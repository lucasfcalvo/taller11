var palabra = prompt("Ingrese un texto")
console.log(palabra)
longitud = palabra.length - 1
console.log ("El caracter en el indice 0 es: " +  palabra.charAt(0));

var indice = prompt("Ingrese un numero mayor que 0 y menor o igual que " + longitud);

if(indice < 0 || indice > longitud){
  console.log("El numero ingresado no es valido, por favor verifique")

  var indice = prompt("Ingrese un numero mayor que 0 y menor o igual que " + longitud);
  console.log("La letra de la palabra " + palabra + " con el indice " + indice + " es: " + palabra[indice])

}else{
  console.log("La letra de la palabra " + palabra + " con el indice " + indice + " es: " + palabra[indice])
}
