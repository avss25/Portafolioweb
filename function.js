function leer() {

    var nom = document.forms["formulario"].elements[0].value;
    var clave = document.getElementById("pass").value;

    // Obtener carrera
    var car = document.getElementsByTagName("select")[0].value;

    // Obtener género
    var gen = document.getElementsByName("genero");
    var g = "No seleccionado";
    for (var i = 0; i < gen.length; i++) {
        if (gen[i].checked) {
            g = gen[i].value === "f" ? "Femenino" : "Masculino";
            break;
        }
    }

    // Mostrar resultado en el div
    document.getElementById("resultado").innerHTML = 
        "<br><strong>Tu nombre:</strong> " + nom +
        "<br><strong>Tu password:</strong> " + clave +
        "<br><strong>Tu carrera:</strong> " + car +
        "<br><strong>Tu género:</strong> " + g;
}
