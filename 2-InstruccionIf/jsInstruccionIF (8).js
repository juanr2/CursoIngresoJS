function Mostrar()
{
//tomo la edad  

	var edad=document.getElementById("edad").value; 
    var estadoCivil=document.getElementById("estadoCivil").value;

    if(edad>18&&(estadoCivil="Soltero"))

    {
        alert ("es soltero y no menor");
    }


}//FIN DE LA FUNCIÓN