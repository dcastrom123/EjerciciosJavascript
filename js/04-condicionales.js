'use strict'

/* Operadores logicos 
AND && Y
OR || O
!= NEGACION
*/


// negacion
var year = 2018;
/*
if(year != 2018){
    console.log("el year no es 2018");
}else{
    console.log("el year es " +year );
}
**/
//AND &&

if(year >= 2000 && year <= 2020){
    console.log("estamos en la epoca actual");
}


// OR ||

if(year == 2008 || year == 2018){
    console.log("el año termina en 8");
}