/*
    Simulamos viajes solicitando el valor del viaje hasta que el saldo sea mayor -300
*/
let saldo = 2500;
let costo;
do {
    costo = +prompt('¿Cuando sale el viaje?');
    saldo = saldo - costo;
    console.log('Buen viaje $', costo);
    console.log('Te quedan $', saldo);
} while( saldo >= -300 )