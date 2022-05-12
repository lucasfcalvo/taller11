var letra = prompt("Ingrese una letra");
longitud = letra.length;

if(longitud > 1) {
    console.log("No se puede procesar el dato");

}else if (letra == "a" || letra == "A" || letra == "e" || letra == "E" || letra == "i" || letra == "I" || letra == "o" || letra == "O" || letra == "u" || letra == "U") {
    console.log(letra + " " + "Es una vocal");
}else {
    console.log("Es una letra distinta a las vocales");
}