function insertarNombre(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value;

    let letrasnombre = nombre.length;

    let opcion = "<li> " + letrasnombre + "</li>";

    let lista = document.getElementById("lista");

    lista.innerHTML += opcion;


}