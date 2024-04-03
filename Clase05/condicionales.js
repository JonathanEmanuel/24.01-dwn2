let color = prompt('Decime tu color preferido');
            //   Evaluación                  SI                      ELSE 
let mensaje = ( color == 'azul') ? 'Tenes un muy buen gusto 😀' : 'Bueno 😐';


/* if( color == 'azul'){
    mensaje = 'Tenes un muy buen gusto 😀';
} else {
    mensaje = 'Bueno 😐';
}
 */
alert(mensaje)

let dia = +prompt('Ingrese el número de día de la semana');

switch (dia){
case 1:
    mensaje = 'Hoy es lunes';
    break;
case 2:
    mensaje = 'Hoy es martes';
    break;
case 3:
    mensaje = 'Hoy es Miercoles';
    break;
case 4:
    mensaje = 'Hoy es Jueves';
    break;
case 5:
    mensaje = 'Hoy es Viernes';
    break;
case 6: 
    mensaje = 'Hoy es Sábado';
    break;
case 7:
    mensaje = 'Hoy es Domingo';
    break;
default:
    mensaje = 'Número invalido';
}

alert(mensaje);