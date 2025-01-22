//creamos un arreglo para guardar a los amigos ingresados
let listaAmigos = [];

//verifica que el input del usuario no esté vacío y agregue el amigo a la lista en dicho caso
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.")
    } else {
        listaAmigos.push(nombreAmigo);
        actualizarListaAmigos();
        limpiarInput();
    }
}

//actualiza el template de HTML con un tag <li></li> por cada elemento que haya en listaAmigos
function actualizarListaAmigos() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; //reseteamos los li que hayan dentro de la etiqueta <ul>
    for (let i=0; i<listaAmigos.length;i++) {
        listaHTML.innerHTML += `<li>${listaAmigos[i]}</li>`; //agregamos un <li> por cada amigo guardado
    }
}

function limpiarInput() {
    document.getElementById('amigo').value = "";
}