/*
    Desarrollar un sistema de ingreso de nombres y edades, que se irán mostrando en pantalla, donde el usuario decide si desea continuar ingresando valores.
*/
let continuar;
do {
    let nombre = prompt('Ingrese el nombre');
    let edad = +prompt('Ingrese la edad');
    console.log('Nombre: ' + nombre + ' | Edad: ' + edad );
    // = es asignación
    continuar = confirm('¿Seguir ingresado datos?');
    // == === es comparación
} while( continuar == true )

