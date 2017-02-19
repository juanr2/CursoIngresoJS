function Mostrar()
{
    var numeros=0;
    parseInt("numeros");
    var cantidadacumulada;
    var promedio;
    


    while(numeros<5)

    {
        numeros++;
        numeros=prompt("ingrese un numero");
        console.log(numeros);

    }
        cantidadacumulada+=numeros;
        promedio=cantidadacumulada/5;



    document.getElementById("suma").value=cantidadacumulada;
    document.getElementById("promedio").value=promedio;




}//FIN DE LA FUNCIÓN