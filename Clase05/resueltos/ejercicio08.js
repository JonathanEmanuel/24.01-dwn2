/*
    Pedir un número al usuario e indicar si el número es negativo, cero o positivo
*/
let numero = parseInt( prompt('Ingrese un número') );

if( numero < 0) { // -123
     alert('El numero es negativo');
} else if( numero == 0){
    alert('El número es Cero');
} else if ( numero > 0){
    alert('El número es positivo');
}