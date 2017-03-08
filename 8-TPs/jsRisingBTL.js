/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
    var sexo;
    var edad;
    var estadocivil;
    var sueldobruto = 0;
    var numerolegajo;

    edad = prompt("ingrese su edad");

    while (edad <= 18 || edad >= 90) {
        edad = prompt("ingrese una edad válida");
    }

    document.getElementById("Edad").value = edad;

    sexo = prompt("ingrese sexo m o f");
    while (sexo != "m" && sexo != "f") {
        sexo = prompt("ingrese un sexo válido");
    }

    document.getElementById("Sexo").value = sexo;


    estadocivil = prompt("ingrese un estado su estado civil");
    while (estadocivil < 1 || estadocivil > 4) {
        estadocivil = prompt("ingrese un estado civil válido");

    }

    var ect;
    switch (estadocivil) {
        case "1":
            ect = "soltero";
            break;
        case 2:
            ect = "casado";
            break;
        case 3:
            ect = "divorciado";
            break;
        default:
            ect = "viudo";

    }

    document.getElementById("EstadoCivil").value = ect;


    sueldobruto = parseInt(prompt("ingrese un sueldo bruto"));
    while (sueldobruto < 8000) {
        sueldobruto = prompt("ingrese sueldo válido");
    }
    document.getElementById("Sueldo").value = sueldobruto;

    numerolegajo = prompt("ingrese el numero de legajo");
    while (numerolegajo < 1000 || numerolegajo > 9999) {
        numerolegajo = prompt("ingrese un numero de legajo válido");
    }
    document.getElementById("Legajo").value = numerolegajo;

    nacionalidad = prompt("ingre su nacionalidad");
    while (nacionalidad < 1 || nacionalidad > 3) {
        nacionalidad = prompt("ingrese nacionalidad válida");
    }


    switch (nacionalidad) {
        case "1":
            ect = "arg";
            break;
        case "2":
            ect = "bol";
            break;
      

    }
    document.getElementById("Nacionalidad").value = ect;

}

