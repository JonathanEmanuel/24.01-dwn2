let numero;
//  var control  cond de corte  incrementador
for( let i=1;     i <= 3;       i++ ){  // Alcance de la variable scope -> Variable local
    numero = +prompt('Ingrese un número');
    console.log('El numero es ', numero);
}


let i = 1;
while( i<= 5){
    console.log('Repetición', i );
    i++;
}

let opcion = true;
while( opcion == true){
    alert('Hola de nuevo');
    opcion = confirm('Desea continuar?');
}

