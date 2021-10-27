function mayorEdad(event) {
    event.preventDefault();

    let nombre = document.getElementById("txt1").value;
    let edad = document.getElementById("txt2").value;

    if (edad >= 18) {
        let opcion = "<li> " + "Hola " + nombre + ", Eres mayor de edad" + "</li>";

        let lista = document.getElementById("lista");

        lista.innerHTML += opcion;
    }
    else {
        let opcion = "<li> " + "Hola " + nombre + ",No eres mayor de edad" + "</li>";

        let lista = document.getElementById("lista");

        lista.innerHTML += opcion;
    }

}