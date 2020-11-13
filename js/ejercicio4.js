'use strict'
/* Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario*/
/*
var numero1 = parseInt(prompt("Ingresar primer numero: ", 0));
var numero2 = parseInt(prompt("Ingresar segundo numero: ", 0));

while(numero1< numero2){
    numero1++;

    if(numero1 %2 != 0){
        console.log("el numero "+ numero1 + " es impar");
    }
    document.write(numero1 +"</br>");
}
*/

var numero1 = parseInt(prompt("Ingresar primer numero: ", 0));
var numero2 = parseInt(prompt("Ingresar segundo numero: ", 0));
/*
while(numero1 < numero2){
    numero1 ++;

    if(numero1 %2 != 0){
        console.log(numero1);
    }
}
*/

/*
var numero1=parseInt(prompt('Ingresar primer numero: ',0));
var numero2=parseInt(prompt('Ingresar segundo numero: ',0));
 
if (numero2 > numero1){
    for (var i=numero1; i<=numero2; i++){
        var residuo = (i % 2);
        if (residuo==1){
            document.write("<h2>El numero " + i + " es un numero impar " + "</h2>");
        }
    }
} else {
    alert('Error: El primer numero ingresado siempre debe ser mayor.....');
}

*/

if(numero1 < numero2){
    for(var i = numero1; i <= numero2; i++){
        var resto = (i % 2);
        if(resto != 0){
            console.log(i);
        }
    }
}else{
    alert("primer numero debe ser mayor");
}