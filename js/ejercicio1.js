'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir
*/


//Pide dos numeros y nos indica cual es mayor, menor y si son iguales

var n1 = parseInt(prompt("ingresar primer numero: ", 0 ));
var n2 = parseInt(prompt("ingresar segundo numero: ", 0));


//quitar el var, porque ya es una asignacion a variable ya definida
while(n1 <= 0 || n2 <=0 || isNaN(n1) || isNaN(n2)){
    n1 = parseInt(prompt("Debes ingresar numeros positivos: ", 0 ));
    n2 = parseInt(prompt("Este numero tambien debe ser positivo: ", 0));

}
if(n1 == n2){
    console.log("el numero " + n1 + " y numero "+ n2 + " son iguales");
}else if(n1 > n2){
    console.log("numero " + n1 + " es mayor que numero " +n2);
}else if(n2 > n1){
    console.log(" numero " + n2 + " es mayor que numero " + n1);
}



//Si no son numeros los ingresados volver a pedirlos

//while(n1 <= 0 || n2 <= 0 || isNaN(n1) || isNaN(n2)){

/*Mientras que los numeros sean menor a cero o iguales a cero, o no sean numeros los ingresados 
vuelve a pedir ingresar numero


isNaN: es una función de alto nivel y no está asociada a ningún objeto. 
        isNaN intenta convertir el parámetro pasado a un número. Si el
        parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false. 
*/


