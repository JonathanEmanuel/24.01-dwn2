const textNombre = document.querySelector('#textNombre');
const textClave = document.querySelector('#textClave');
const formLogin = document.querySelector('#formLogin');
const textError = document.querySelector('#textError');


let nombre = localStorage.getItem('usuario');

if( nombre ){
    location.href = 'index.html';
}


/* ----------------- FUNCION 01 - Leer el usuario y la clave ---------------- */
formLogin.addEventListener('submit', function(evento){
    evento.preventDefault();
    console.log('Iniciando Login !');
    let nombre = textNombre.value;
    let clave = textClave.value;

    if( (nombre == 'juan' || nombre == 'rocio') && clave == '1234'){
        localStorage.setItem('usuario', nombre);
        location.href = 'index.html';
    } else {
        textError.innerText = 'Crendenciales invalidas';
    }
})