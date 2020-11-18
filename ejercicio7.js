'use strict'

//Mostrar tabla de multiplicar hasta el 10 de un numero ingresado por pantalla

//var numero = parseInt(prompt("Mostrar tabla de multiplicar del numero: ", 1));
/*
document.write("<h1> Tabla de multiplicar del numero: " + numero +"</h1>");
for(var i = 1; i <= 15; i++){
    document.write(i + " x " + numero + " = " + (numero*i) +  "</br>");
}
*/
//Todas las tablas de multiplicar

var numero = parseInt(prompt("Mostrar tablas de el 1 hasta el: ", 1));


for(var c = 1; c <=numero; c++){
    document.write("<h1> Tabla de multiplicar del numero: " + c +"</h1>");
    for(var i = 1; i <= 15; i++){
     document.write(i + " x " + c + " = " + (c*i) +  "</br>");
    }
}