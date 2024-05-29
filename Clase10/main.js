// Tipos de datos
//let nombre = 'Julia'; // String
//let edad = 28; // Number
//let casada = true; // Boolean
//let libros = [ 'Programación en JavaScript', 'HTML y CSS'];
/*
console.log( typeof(nombre) );
console.log( typeof(edad) );
console.log( typeof(casada));
console.log( typeof(libros));
*/

//libros[0] = 'JS';
// Creamos un objeto Persona. Forma literal
const persona = {
    // Atributos
    nombre: 'Rocio',
    apellido: 'Gomez',
    edad: 21,
    email: 'rocio.gomez@gmail.com',
    lenguajes: ['JavaScript', 'HTML', 'CSS'],
    foto: null,
    // Métodos
    saludar: function(){
        console.log('Hola soy ' +  this.nombre)
    },
    mostrarEdad: function(){
        console.log('Tengo ' + this.edad + ' años');
    },
    agregarLenguaje: function(lenguaje){
        this.lenguajes.push(lenguaje);
    },
    mostrarLenguajes: function(){
        for(let i=0; i < this.lenguajes.length; i++){
            console.log(  this.lenguajes[i], i );
        }
    }
}

const persona2 = {
    // Atributos
    nombre: 'Marcelo',
    apellido: 'Ruiz',
    edad: 32,
    email: '',
    lenguajes: [],
    foto: null,
    // Métodos
    saludar: function(){
        console.log('Hola soy ' +  this.nombre)
    },
    mostrarEdad: function(){
        console.log('Tengo ' + this.edad + ' años');
    },
    agregarLenguaje: function(lenguaje){
        this.lenguajes.push(lenguaje);
    },
    mostrarLenguajes: function(){
        for(let i=0; i < this.lenguajes.length; i++){
            console.log(  this.lenguajes[i] );
        }
    }
}


console.log ( typeof(persona)  );
console.log( persona);
// Acceder a una propiedad
console.log( persona.nombre );
// Modificar una propiedad
persona.edad = 28;

console.log( persona.edad);

// Agrego nuevas propiedades
persona.tel = '11-2222-4444';

console.table( persona);

persona.saludar();
persona.mostrarEdad();
persona.agregarLenguaje('PHP')
persona.mostrarLenguajes()


persona2.saludar();
persona2.mostrarEdad();