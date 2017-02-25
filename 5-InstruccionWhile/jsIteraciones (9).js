function Mostrar()
{   var num,max,min;
    var respuesta;
    var bandera=true;


    while(respuesta!="si")

    {
        num=parseInt(prompt("Ingrese un numero"));
        respuesta=prompt("¿Quiere salir?")
       

    
	
    if(bandera)

    { bandera=false;
        max=num;
        min=num;
        
    }

    else
    {
        if(num<min)

        {
            min=num;
        }

        if(num>max)

        {
            max=num;
        }

        document.getElementById("maximo").value=max;
        document.getElementById("minimo").value=min;

    }

    }


}//FIN DE LA FUNCIÓN