const formulario = document.querySelector('form');
const listContactos = document.querySelector('#listContactos');
const textNombre = document.querySelector('#textNombre');
const textTel = document.querySelector('#textTel');
const textError = document.querySelector('#textError');

const lista = [];
let posicion = -1;
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
    }

})


/* --------------- FUNCION 02 - RENDERIZAR LISTA DE CONTACTOS --------------- */
function renderizarContactos( lista){
    listContactos.innerHTML = '';

    for(let i=0; i<lista.length; i++){
        const nombre = lista[i].nombre;
        const tel = lista[i].tel;

        listContactos.innerHTML += 
            `<li class="list-group-item">
                <div>
                    <i class="fa-solid fa-user text-primary"></i>
                    <span> ${nombre} </span>
                </div>
                <div>
                    <i class="fa-brands fa-square-whatsapp text-success"></i>
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
}

/* --------------------------- FUNCION 04 - EDITAR -------------------------- */
function editar(i){
    posicion = i;
    const nombre = lista[i].nombre;
    const tel = lista[i].tel;

    textNombre.value = nombre;
    textTel.value = tel;


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