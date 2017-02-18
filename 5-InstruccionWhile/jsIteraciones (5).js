function Mostrar() {
    var sexo = prompt("Ingrese un sexo válido");

    while (sexo != "f" && sexo != "m") {

        sexo = prompt("ingrese otro sexo");

    }
    document.getElementById("Sexo").value = sexo

}//FIN DE LA FUNCIÓN