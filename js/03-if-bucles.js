'use strict'

// Condicional IF
// Si A es igual a B entonces haz algo
/*
var edad1 = 45;
var edad2 = 41;

if(edad1 > edad2){
    console.log("edad 1 es mayor que edad 2");
}else{
    console.log("edad 2 es mayor");
}
*/

var edad =parseInt(prompt("ingrese su edad",0));
var nombre = "Juan";

if(edad >= 18){
    console.log( nombre + " Es mayor de edad");
    if(edad <= 33){
        console.log("Es milenial");
    }else if(edad > 33 && edad < 60){
        console.log("Es adulto casi viejo");
    }
    else if(edad >= 60 ){
        console.log("Es adulto mayor");
    }
}else{
    console.log( nombre +  " Es menor de edad");
    if(edad < 10){
        console.log("es un niño");
    }
}





