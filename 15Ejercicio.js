var palabra1 = prompt("Ingrese una palabra: ");
var palabra2 = prompt("Ingrese otra palabra: ");
longitud1 = palabra1.length;
longitud2 = palabra2.length;

if (longitud1 < longitud2){
    console.log(true + "La primera palabra es menor que la segunda");
}else{
    console.log(false + " " + "La primera palabra es mayor que la segunda");
}