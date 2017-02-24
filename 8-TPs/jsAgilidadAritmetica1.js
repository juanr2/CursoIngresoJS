/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var respuesta2;

var resultado;

   

function comenzar()
{
     respuesta=Math.floor(Math.random()*(11-1)+1);
    document.getElementById("PrimerNumero").value=respuesta;

    respuesta2=Math.floor(Math.random()*(11-1)+1);
        document.getElementById("SegundoNumero").value=respuesta2;

        operador=Math.floor(Math.random()*(5-1)+1);
        switch(operador)

        {
            case 1:
             {    document.getElementById("Operador").value="suma";
                    resultado=respuesta+respuesta2;

             break;}

            case 2:
                 {document.getElementById("Operador").value="resta";
                 resultado=respuesta-respuesta2;
                 break;}
            case 3:
                {document.getElementById("Operador").value="multiplicacion";
                resultado=respuesta*respuesta2;
                break;}
            case 4:
                {document.getElementById("Operador").value="division";
                resultado=respuesta/respuesta2;
                break;}
        }

    
    

}//FIN DE LA FUNCIÓN
function Responder()
{
	
document.getElementById("Respuesta").value=resultado;
}//FIN DE LA FUNCIÓN
