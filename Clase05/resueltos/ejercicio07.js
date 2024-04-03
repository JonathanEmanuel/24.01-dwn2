/*
 Realizar un programa que solicite el número de día de la semana 1, 2, 3, 4, 5, 6, 7 e indique qué día es (Lunes, Martes, Miércoles, Jueves, Viernes, Sábado, Domingo)
*/

console.log('Ejercicio 07');
let dia = +prompt('Ingrese el número de día de la semana');
let mensaje = '';

if( dia == 1){
    mensaje = 'Hoy es lunes';
} else if( dia == 2){
    mensaje = 'Hoy es martes';
} else if( dia == 3){
    mensaje = 'Hoy es Miercoles';
} else if( dia == 4){
    mensaje = 'Hoy es Jueves';
} else if( dia == 5){
    mensaje = 'Hoy es Viernes';
} else if( dia == 6){
    mensaje = 'Hoy es Sábado';
} else if( dia == 7){
    mensaje = 'Hoy es Domingo';
} else {
    mensaje = 'Número invalido';
}

alert(mensaje);

