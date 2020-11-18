'use strict'

/* Funciones: es una agrupacion reutilizable de un conjunto de instrucciones */


//Defino la funcion
function calculadora(numero1, numero2){

    //Conjunto de instrucciones
    console.log("Suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("************************************* ");
    
}

//Invocar funcion

for(var i = 1; i <= 3; i++){
    console.log("vamos en el iterador "+i);
    calculadora(i, 2);
}