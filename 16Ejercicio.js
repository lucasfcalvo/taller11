var nom1 = prompt("Ingrese el primer nombre: ");
var nom2 = prompt("Ingrese el segundo nombre: ");

if (nom1.charAt(0) == nom2.charAt(0)){
    console.log(true + " " + "Los nombres ingresados inician por la misma letra");
}else if(nom1.charAt(6) == nom2.charAt(6)){
    console.log(true + " " + "Los nombres ingresados terminan por la misma letra");
}else {
    console.log(false + " " + "No hay ninguna coincidencia");
}