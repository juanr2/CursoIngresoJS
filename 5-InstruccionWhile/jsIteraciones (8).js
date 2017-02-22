function Mostrar()
{
    var numero;
    var respuesta=true;
    positivo=0;

    while(respuesta!=true)

    {
        numero=prompt("ingrese un numero");

        if (numero>0)
        {  

        positivo+=parseInt(numero);
       }

       else
{   
      producto=numero*numero;

}
    }
	

    document.getElementById("suma").value=positivo;
    document.getElementById("producto").value=producto;
}//FIN DE LA FUNCIÓN