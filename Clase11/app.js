console.log('Clase 11 - Eventos');
const h2 = document.querySelector('h2');
const btnCargar = document.querySelector('#btnCargar');
const textTarea = document.querySelector('#textTarea');
const textError = document.querySelector('#textError');
const listTareas = document.querySelector('#listTareas');
const form = document.querySelector('form');

const tareas = [
    'Salir a correr 🏃‍♂️',
    'Ir al cine 🍿',
    'Mirar una Serie 🎞',
    'Tomar mates 🧉',
    'Pasear al perro 🐕‍🦺'
]

// Agrego un escuchador de eventos
btnCargar.addEventListener('click', function () {
    redenrizarTareas(tareas);
});


textTarea.addEventListener('focus', function(){
    console.log('se hizo el foco en el textArea');
    textError.innerText = '';
})

function ingresarNombre(){
    let nombre = prompt('ingrese su nombre');
    h2.innerText = `Hola ${nombre} 😀`;
}

function redenrizarTareas(tareas){
    // Limpio el contenedor
    listTareas.innerHTML = '';
    // Recorre el array y crea por cada elemento una <li>
    for (let i = 0; i < tareas.length; i++) {
        const tarea = tareas[i];
        console.log(i, tarea);
        // template string ``
        listTareas.innerHTML += 
            `<li class="list-group-item">
                <i class="fa-regular fa-clock"></i> ${tarea}
            </li>`;
    }
}

// Escucho el evento del formulario submit
form.addEventListener('submit', function(evento){
    evento.preventDefault(); // Evita la recarga de la página
    let tarea = textTarea.value; // leo el valor del textarea
    if( tarea == ''){  // Validamos si el usuario ingreso un texto
        textError.innerText = 'Complete este campo, que es obligatorio';
        //alert('ingresar la tarea');
    } else {
        console.log(tarea);
        tareas.push( tarea);
        textTarea.value = ''; // limpio el valor del textarea
        redenrizarTareas(tareas);
    }

})