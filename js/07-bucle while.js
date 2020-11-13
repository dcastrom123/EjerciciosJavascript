'use strict'
// Bucle while

var year = 2018;

while(year != 1990){
    console.log("estamos en el año "+year);
    //document.write("Estamos en el año: " +year +"</br>");

    if(year == 2025){
        break;
    }

    year ++;

}

var years = parseInt(prompt("ingresa edad para iniciar el bucle do while: ", 0));

do{
    alert("se muestra este mensaje mientras se cumpla la condicion:" +years);

    years++;
}while(years <= 30);
