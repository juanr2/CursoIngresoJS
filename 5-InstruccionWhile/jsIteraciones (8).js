function Mostrar()
{
    var numero;
    var positivo=0;
    var negativo=1;
    var respuesta;
   
    

    while(respuesta!="si")

    { 
        numero=parseInt(prompt("ingrese un numero"));
        respuesta=prompt("desea salir");
        
        if (numero>0)
        
        {

            positivo+=numero;
        }

        else

        {
          negativo*=numero;
            
        }




    }

    document.getElementById("suma").value=positivo;
    document.getElementById("producto").value=negativo;
}//FIN DE LA FUNCIÓN