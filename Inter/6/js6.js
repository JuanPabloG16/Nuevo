function divisible(event) {
    event.preventDefault();

    let numero1 = document.getElementById("txt1");
    let numero2 = document.getElementById("txt2");
    //numero1
    if (numero1 < 0) {

        if (numero1 % 1 == 0) {
            let respuesta = 1;
            let tex1 = "Debe ingresar numeros enteros positivos";
        }
        else {
            let respuesta = 1;
            let tex1 = "Debe ingresar numeros positivos";
        }
    }
    else if (numero1 % 1 == 0) {
        let respuesta = 1;
        let tex1 = "Debe ingresar numeros enteros";
    }
    //numero 2
    if (numero2 < 0) {

        if (numero2 % 1 == 0) {
            let respuesta2 = 1;
            let tex2 = "Debe ingresar numeros enteros positivos";
        }
        else {
            let respuesta = 1;
            let tex2 = "Debe ingresar numeros positivos";
        }
    }
    else if (numero2 % 1 == 0) {
        let respuesta2 = 1;
        let tex2 = "Debe ingresar numeros enteros";
    }

    //valida
    if (respuesta1 == 1 & respuesta2 == 1) {
        let opcion = "<li>" + numero1 + " " + tex1 + " " + numero2 + " " + tex2 + "</li>";
        let lista = document.getElementById("lista");
        lista.innerHTML += opcion;
    }
    else if (respuesta1 == 1) {
        let opcion = "<li>" + numero1 + " " + tex1 + "</li>";
        let lista = document.getElementById("lista");
        lista.innerHTML += opcion;
    }
    else if (respuesta2 == 1) {
        let opcion = "<li>" + numero2 + " " + tex2 + "</li>";
        let lista = document.getElementById("lista");
        lista.innerHTML += opcion;
    }
    else if (respuesta1 != 1 & respuesta2 != 1) {
        if (numero1 % numero2 == 0) {
            let opcion = "<li>" + numero1 + "Es divisible con " + numero2 + "</li>";
            let lista = document.getElementById("lista");
            lista.innerHTML += opcion;
        }
        else {
            let opcion = "<li>" + numero1 + "No es divisible con " + numero2 + "</li>";
            let lista = document.getElementById("lista");
            lista.innerHTML += opcion;
        }
    }


}