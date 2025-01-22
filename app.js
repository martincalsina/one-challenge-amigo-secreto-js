//creamos un arreglo para guardar a los amigos ingresados
let listaAmigos = [];

//verifica que el input del usuario no esté vacío y agregue el amigo a la lista en dicho caso
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.")
    } else {
        listaAmigos.push(nombreAmigo);
        limpiarInput();
    }
}

function limpiarInput() {
    document.getElementById('amigo').value = "";
}