function Mostrar()
{
    var numero;
    var respuesta="si";
    var cantidadacumulada=0;
    var promedio;
    var contador;


    while(respuesta!=si)
    {
         contador++;
         numero=parseInt(numero);

        numero=prompt("ingrese numeros");
        cantidadacumulada +=parseInt(numero);
       
        respuesta=confirm("salir");

    }

    promedio=cantidadacumulada/contador;


    document.getElementById("suma").value=cantidadacumulada;
    document.getElementById("promedio").value=promedio;
 




}//FIN DE LA FUNCIÓN