function nota(event) {
    event.preventDefault();
    let nombre = document.getElementById("txt1").value;
    let materia = document.getElementById("txt2").value;
    let nota1 = parseFloat(document.getElementById("txt3").value);
    let nota2 = parseFloat(document.getElementById("txt4").value);
    let nota3 = parseFloat(document.getElementById("txt5").value);
   
    let suma = nota1 + nota2 + nota3;
    let promedio = suma / 3;

    if (promedio >= 3) {
        let opcion = "<li>" + "Felicitaciones " + nombre + " Su nota es: " + promedio + " pasaste la materia de " + materia + "</li>";

        let lista = document.getElementById("lista");

        lista.innerHTML += opcion;
    }
    else {
        let opcion = "<li>" + "Lo siento " + nombre + "Su nota es: " + promedio + " perdiste la materia de " + materia + "</li>";

        let lista = document.getElementById("lista");

        lista.innerHTML += opcion;
    }

}