/*
    Crear un programa que  determine el valor de la entrada al cine según la edad, basándose en la siguiente tabla
*/

let edad = parseInt( prompt('Ingrese su Edad'));
let valor;

if( edad < 12){
    valor = 500;
} else if ( edad > 12 && edad <= 64 ){
   valor = 750;
} else if ( edad > 64){
    valor = 300;
}

alert('El valor de la entrada para ' + edad + ' es: $' + valor);