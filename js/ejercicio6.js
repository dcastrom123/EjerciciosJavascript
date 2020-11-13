'use strict'

/*
-Que nos diga si un numero es par o impar
-Ventana prompt
-Si no es un numero volver a pedir que se ingrese un numero
*/

var numero = parseInt(prompt("ingresar numero", 0));

while(isNaN(numero)){
    numero = parseInt(prompt("ingresar nuevo numero", 0));
}

if(numero % 2 == 0){
    console.log("El numero es par");
}else{
    console.log("El numero es impar");
}

