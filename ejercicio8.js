'use strict'
/*Calculadora
-Pida dos numeros al usuario
-Si no son numeros, volver a pedir ingresar al usuario
-Mostrar en el cuerpo de la pagina y por consola, la suma, la resta, la multiplicacion y la division.
*/
/*
var numero1 = parseInt(prompt("Ingresar primer numero : ", 0));
var numero2 = parseInt(prompt("Ingresar segundo numero : ", 0));

while(isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Ingresar numero valido :",0));
    numero2 = parseInt(prompt("Ingresar numero valido : ",0));
}

var resultado = "La suma es:" +(numero1+numero2)+ "</br>" +
                "La resta es:" +(numero1-numero2)+ "</br>" +
                "La multiplicacion es:" +(numero1*numero2)+ "</br>" +
                "La division es:" +(numero1/numero2)+ "</br>";


var resultadoA = "La suma es:" +(numero1+numero2)+ "\n" +
                "La resta es:" +(numero1-numero2)+ "\n" +
                "La multiplicacion es:" +(numero1*numero2)+ "\n" +
                "La division es:" +(numero1/numero2)+ "\n";


document.write("El resultado es: </br> " + resultado);
alert("El resultado es: "+ resultadoA);
console.log("El resultado es: "+ resultadoA);
*/


var numero1 = parseInt(prompt("Ingresar primer numero : ", 0));
var numero2 = parseInt(prompt("Ingresar segundo numero : ", 0));
var resultadoX = parseInt(prompt("Ingrese la operacion que le gustaria hacer: \n 1(suma) \n 2(resta) \n 3(multiplicacion) \n 4(division) \n 5(opcion misteriosa): ",0));


var suma = (numero1+numero2);
var resta = (numero1-numero2);
var multiplicacion = (numero1*numero2);
var division = (numero1/numero2);
var misteriosa = "no hace calculos";




switch(resultadoX){
    case 1:
        console.log("El resultado es: "+(suma));
    break;
    case 2:
        console.log("El resultado es: "+(resta));
    break;
    case 3:
        console.log("El resultado es: "+(multiplicacion));
    break;
    case 4:
        console.log("El resultado es: "+(division));
    break;
    case 5:
        console.log("No tiene resultado porque la opcion "+(misteriosa));
    break;
    default:
        
    break;
}


