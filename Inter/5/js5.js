function numero(event) {
    event.preventDefault();
    let numero = parseFloat(document.getElementById("txt1").value);

    if (numero < 0) {

        if (numero % 1 == 0) {
            let opcion = "<li>" + numero + "Debe ingresar numeros enteros positivos" + "</li>";

            let lista = document.getElementById("lista");

            lista.innerHTML += opcion;
        }
        else {
            let opcion = "<li>" + numero + "Debe ingresar numeros positivos " + "</li>";

            let lista = document.getElementById("lista");

            lista.innerHTML += opcion;
        }
        if (numero % 1 == 0) {
            let opcion = "<li>" + numero + "Debe ingresar numeros enteros" + "</li>";

            let lista = document.getElementById("lista");

            lista.innerHTML += opcion;
        }
        else if (numero % 2 == 1) {
            let opcion = "<li>" + numero + "Es impar" + "</li>";

            let lista = document.getElementById("lista");

            lista.innerHTML += opcion;
        }
        else if (numero % 2 == 0) {
            let opcion = "<li>" + numero + "Es par" + "</li>";

            let lista = document.getElementById("lista");

            lista.innerHTML += opcion;
        }
    }
}