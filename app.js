
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Paso numero 1: Crear un array para almacenar los datos
let amigos = [];

const listaAmigosElem       = document.getElementById('listaAmigos');
const resultadoAmigoElem    = document.getElementById('resultado');
const boton                 = document.getElementById("reiniciar");
const nombredeamigo         = document.getElementById("amigo");



nombredeamigo.addEventListener("input", function () {
    // Reemplaza cualquier número por vacío
    this.value = this.value.replace(/[0-9]/g, "");
  });


// paso numero 2: Crear una función para agregar amigos a la lista
function agregarAmigo(){
    resultadoAmigoElem.innerHTML="";    
    let nombredeamigo  = document.getElementById("amigo").value.trim();
    if (nombredeamigo === '') {
         alert('por favor, inserte un nombre');
         return
    }
    boton.disabled = false;
    amigos.push(nombredeamigo);
    console.log(amigos);    
    actualizarListaAmigos();    
    return
}

// Tarea 3 Trello: Se crea una función para actualizar la lista de amigos
function actualizarListaAmigos() {
    listaAmigosElem.innerHTML = "";
    amigos.forEach(amigo => {
        listaAmigosElem.innerHTML += `<li>  - ${amigo}</li>`;
    });
    limpiarCaja();
}

// Actividad 4 Trello: Se genera una funcion para realizar sorteo de amigo secreto
function sortearAmigo(){    
    resultadoAmigoElem.innerHTML='';

    if (amigos.length===0){
        resultadoAmigoElem.textContent='No Hay amigos para realizar el sorteo';
        return;
    }
    if(amigos.length===1){
        resultadoAmigoElem.textContent='Solo haz ingresado un amigo';
        return;        
    }
    const amigoSorteado = Math.floor(Math.random() * amigos.length);
    resultadoAmigoElem.textContent=`El amigo secreto es:  ${amigos[amigoSorteado]}`    
    return;
}


// Bonus 1: Se crea una funcion que una vez ingresado el nombre del amigo limpia el campo de texto para volver a ingresar otro
function limpiarCaja(){
    let valorCaja = document.getElementById("amigo");
    valorCaja.value = "";
}


// Bonus 2: Se crea funcion que reinicia el sorteo, dejando las variables por defecto para volver a jugar
function reiniciarJuego(){
    limpiarCaja();
    listaAmigosElem.innerHTML = "";
    resultadoAmigoElem.innerHTML="";
    amigos = [];
    boton.disabled = true;
    return;
}