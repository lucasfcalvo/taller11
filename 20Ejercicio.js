var num1 = Number(prompt("Ingrese el primer numero: "));
var num2 = Number(prompt("Ingrese el segundo numero: "));
var num3 = Number(prompt("Ingrese el tercer numero"));

if (num1 > num2 && num1 > num3){
    console.log(num1 + " " + "es el numero mayor");
}else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " " + "es el numero mayor");
}else{
    console.log(num3 + " " + "es el mayor");
}