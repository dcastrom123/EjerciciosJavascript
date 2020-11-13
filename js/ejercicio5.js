'use strict'

/*
Mostrar los divisores de un numero ingresasdo
*/

var numero = parseInt(prompt("Ingresar un numero: ", 1));

for (var i = 1; i <= numero; i++){
    if(numero % i == 0){
        console.log(i);
    }
}