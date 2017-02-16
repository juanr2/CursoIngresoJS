/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
    eleccionMaquina=parseInt(Math.random () *(4-1))+1;
    console.log(eleccionMaquina);



}//FIN DE LA FUNCIÓN
function piedra()


{
 if (eleccionMaquina==1)

 {

     alert("Empataron");
 }
 
 else if (eleccionMaquina==2)

{
    alert("Gana la maquina");

}

else 
{
    alert("gana el jugador");
}


comenzar()
}//FIN DE LA FUNCIÓN
function papel()
{

    if (eleccionMaquina==1)

    {
        alert("Gana el jugador");
    }

    else if (eleccionMaquina==2)

    {
        alert("Empate");
    }
    else 

    {
        alert("gana la maquina");
    }

comenzar ()
}//FIN DE LA FUNCIÓN
function tijera()
{
	if (eleccionMaquina==1)

    {
        alert("gana la maquina");
    }

    else if (eleccionMaquina==2)

    {

        alert("gana el jugador");
    }

    else 

    {
        alert("empate");
    }
comenzar ()
}//FIN DE LA FUNCIÓN