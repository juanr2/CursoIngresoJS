/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var respuesta;
var respuesta2;
var operador;
var temporizador;
var resultado;
function comenzar()
{
    respuesta=Math.floor(Math.random()*(11-1)+1);
    document.getElementById("PrimerNumero").value=respuesta;

    respuesta2=Math.floor(Math.random()*(11-1)+1);
    document.getElementById("SegundoNumero").value=respuesta2;

    operador=Math.floor(Math.random()*(5-1)+1);

    switch(operador){
        
        case 1:

        {
            document.getElementById("Operador").value="suma";
            resultado=respuesta+respuesta2;
            break;
        }

        case 2:
         {
             document.getElementById("Operador").value="resta";
             resultado=respuesta-respuesta2;
             break;
         }
         case 3:
         {
             document.getElementById("Operador").value="division";
             resultado=respuesta/respuesta2;
             break;
         }
         case 4:

         {
             document.getElementById("Operador").value="multiplicacion";
             resultado=respuesta*respuesta2;
             break;
         }


    }
	
}//FIN DE LA FUNCIÓN
function Responder() 
{

    document.getElementById("Respuesta").value=resultado
    setTimeOut(function Responder(){}, 4000);

}//FIN DE LA FUNCIÓN
