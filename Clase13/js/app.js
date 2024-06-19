const formulario = document.querySelector('form');
const listContactos = document.querySelector('#listContactos');
const textNombre = document.querySelector('#textNombre');
const textTel = document.querySelector('#textTel');
const textError = document.querySelector('#textError');
const sCantidad = document.querySelector('#cantidad');
const h3Usuario = document.querySelector('#h3Usuario');
const btnSalir = document.querySelector('#btnSalir');

const pRojo = document.querySelector('#textRojo');
const btnEliminarBorde = document.querySelector('#btnEliminarBorde');
const btnModo = document.querySelector('#btnModo');
const body = document.querySelector('body');

// Cuando abre la aplicación leemos los datos del localStorage
let nombre = localStorage.getItem('usuario');
h3Usuario.innerText = 'Hola ' + nombre;

if( !nombre ){
    location.href = 'login.html';
}

btnSalir.addEventListener('click', function(){
    localStorage.removeItem('usuario');
    location.href = 'login.html';
})

let modo = localStorage.getItem('modo');
if( modo ) {
    if( modo == 'dark'){
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
} else {
    body.classList.remove('dark');
}

let lista = [];
let datoGuardados = JSON.parse( localStorage.getItem('contactos') );
if( datoGuardados) {
    lista = datoGuardados;
} else {
    lista = [];
}



let posicion = -1;
sCantidad.innerText = lista.length;
/* ----------------------- FUNCION 01 - CREAR CONTACTO ---------------------- */
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    const nombre = textNombre.value;
    const tel = textTel.value;

    if( nombre == '' || tel == ''){
        textError.innerText = 'Por favor, Complete todos los campos 😉';
    } else {
        // Verifico si es un nuevo contacto
        if( posicion == -1){
            lista.push({
                nombre: nombre,
                tel: tel
            })
        } else {
            // Edito un dato del array por posición
            lista[posicion].nombre = nombre;
            lista[posicion].tel = tel;
            posicion = -1; // Para que los ingresos sean nuevo
        }


        renderizarContactos(lista);
        textNombre.value = '';
        textTel.value = '';
        // Actualizo el indicador de cantidad
        sCantidad.innerText = lista.length;

        // Guardo la lista 
        const arrayString = JSON.stringify(lista);
        localStorage.setItem('contactos', arrayString);
    }

})


/* --------------- FUNCION 02 - RENDERIZAR LISTA DE CONTACTOS --------------- */
function renderizarContactos( lista){
    listContactos.innerHTML = '';

    for(let i=0; i<lista.length; i++){
        const nombre = lista[i].nombre;
        const tel = lista[i].tel;

        listContactos.innerHTML += // html
            `<li onclick="agregarZoom(this)" class="list-group-item">
                <div>
                    <i class="fa-solid fa-user fa-lg text-primary"></i>
                    <span> ${nombre} </span>
                </div>
                <div>
                    <i class="fa-brands fa-square-whatsapp fa-lg text-success"></i>
                    <span>${tel}</span>
                </div>
                <div>
                <hr>
                <button onclick="editar(${i})" class="btn btn-primary btn-sm" type="button">
                    <i class="fa-solid fa-square-pen"></i>
                </button>
                <button onclick="eliminar(${i})" class="btn btn-danger btn-sm">
                    <i class="fa-solid fa-trash"></i>
                </button>
                </div>
            </li>`
    }
}

/* -------------------------- FUNCION 03 - ELIMINAR ------------------------- */
function eliminar(i){
    // Elimino del Array  (pos, cantidad)
    lista.splice(i, 1);
    // Actualizo el HTML
    renderizarContactos(lista);

    // Actualizo el indicador de cantidad
    sCantidad.innerText = lista.length;

    // Guardo la lista 
    const arrayString = JSON.stringify(lista);
    localStorage.setItem('contactos', arrayString);
}

/* --------------------------- FUNCION 04 - EDITAR -------------------------- */
function editar(i){
    posicion = i;
    const nombre = lista[i].nombre;
    const tel = lista[i].tel;

    textNombre.value = nombre;
    textTel.value = tel;

    // Guardo la lista 
    const arrayString = JSON.stringify(lista);
    localStorage.setItem('contactos', arrayString);
}


// Escuchamos el evento cuando se hace se selecciona el input del nombre
// Eliminamos el mensaje de error
textNombre.addEventListener('focus', function(){
    textError.innerText = '';
})
// Escuchamos el evento cuando se hace se selecciona el input del telefono
// Eliminamos el mensaje de error
textTel.addEventListener('focus', function(){
    textError.innerText = '';
})

renderizarContactos(lista);


/* ------------------- EDICIÓN DE ESTILOS DESDE JAVASCRIPT ------------------ */


pRojo.addEventListener('click', function(){
    // Para agregar una clase css utilizamos .classList.add('nombreClase');
    pRojo.classList.add('borde');
})

btnEliminarBorde.addEventListener('click', function(){
    // Para eliminar una clase css utilizamos .classList.remove('nombreClase');
    pRojo.classList.remove('borde');
})

btnModo.addEventListener('click', function(){
    // Si la clase exite la remueve y si no existe la agrega
    body.classList.toggle('dark');
    if ( body.classList.contains('dark') == true){
        localStorage.setItem('modo', 'dark');
    } else {
        localStorage.setItem('modo', 'white');
    }
})

function agregarZoom( elemento ){
    // Busco todos lo elementos que tengan la clase y se la elimino
    const elementosZoom = document.querySelectorAll('.zoom');
    
    for (let i = 0; i < elementosZoom.length; i++) {
        elementosZoom[i].classList.remove('zoom');
    }
    // Agrego la clase al elemento seleccionado
    elemento.classList.toggle('zoom');
}