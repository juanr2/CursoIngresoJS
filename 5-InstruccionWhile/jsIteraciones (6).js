function Mostrar() {
    //var numero = 0;
    var cantidadacumulada = 0;
    var promedio;
    var i = 0;

    while (i++ < 5) {
        var num = prompt("ingrese un numero");
        cantidadacumulada += parseInt(num);
    }
    
    promedio = cantidadacumulada / 5;

    document.getElementById("suma").value = cantidadacumulada;
    document.getElementById("promedio").value = promedio;




}//FIN DE LA FUNCIÓN