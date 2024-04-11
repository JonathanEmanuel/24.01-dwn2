# Bucles
    Tenemos dos tipos de Bucles
    - Abiertos
    - Cerrados

## Bucles Cerrados
> Cuando se la cantidad de veces que se repite el bucle
``` js
    // Se repite cinco veces
    for(let i=1; i<= 5, i++){
        console.log('Repetición', i);
    }
```

## Bucles Abierto 
> Cuando no se las veces que debe repetir
``` js
    let numero;
    do {
        numero = +prompt('Dame un número');
        console.log('El número es ', numero );
    }
```