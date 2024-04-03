// Bucles Abierto

let opcion1 = +prompt('1.Enviar notificar \n 4. Salir \n Ingrese la opcion');
// Mienstra la opcion No sea 4 que se repita el bucle
while( opcion1 != 4){ // Mientras No sea cuatro
    alert('Enviando Notificación');
    opcion1 = +prompt('1.Enviar notificar \n 4. Salir \n Ingrese la opcion');
}
alert('Fin del Programa');


let opcion;
do {
    opcion = +prompt('1.Enviar notificar \n 4. Salir \n Ingrese la opcion');
    alert('Enviando Notificación');

} while( opcion != 4)
