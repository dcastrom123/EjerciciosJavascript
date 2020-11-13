'use strict'

//Switch

var edad = parseInt(prompt("ingresa tu edad actual", 0));
var mostrar = "";

switch(edad){
    case 18:
        mostrar = "Cumples 18 años";
    break;
    case 25:
        mostrar = "Cumples 25 ";
    break;
    default:
        mostrar = "edad neutra";
    break;
}

console.log(mostrar);