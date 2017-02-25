function Mostrar()
{
    var numero;
    var cantidadacumulada=0;
    var contador=0;
    var respuesta;
    
    


    while(respuesta!="si")
    {
        contador++;
        numero=parseInt(prompt("ingrese un numero"));
        respuesta=prompt("¿desea salir?");
        cantidadacumulada+=numero;


    }
    
    document.getElementById("suma").value=parseInt(cantidadacumulada);
    document.getElementById("promedio").value=parseInt(cantidadacumulada/contador);
 



}//FIN DE LA FUNCIÓN