/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahí mostrar el resultado
*/


'use strict'

var suma = 0;
var contador = 0;
var promedio = 0;

do{
    var numero = parseInt(prompt("Ingresar numero: ", 0));

    if(isNaN(numero)){
        numero = 0;
    }else if(numero >= 0){
        suma = suma + numero;
        contador++;
    }
    console.log("muestra suma : " +suma);
    console.log("muestra numero ingresado: " + numero);

}while(numero >= 0);

alert("muestra el contador :" +contador);
alert("muestra el total de la suma: " +suma);
alert("muestra el promedio "+ (promedio = (suma/contador)));
