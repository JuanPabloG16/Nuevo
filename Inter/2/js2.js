function texto(event) {
    event.preventDefault();

    let texto = document.getElementById("numero1").value;

    isNaN(numero1);
    if (isNaN(texto) == false) {
        let opcion = "<li> " + texto + "=" + "Número" + "</li>";

        let lista = document.getElementById("lista_num");

        lista.innerHTML += opcion;
    }
    else {
        let opcion = "<li> " + texto + "=" + "Texto" + "</li>";

        let lista = document.getElementById("lista_num");

        lista.innerHTML += opcion;
    }

}