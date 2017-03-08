/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var contadorIntentos = 0;
var numero = 0;
var numeroSecreto

function comenzar() {
 
  //Genero el número RANDOM entre 1 y 100
  numeroSecreto = parseInt(Math.random() * (100 - 1) + 1);
  console.log(numeroSecreto);
  //alert(numeroSecreto );


}

function verificar() {
 var numero = parseInt(document.getElementById("numero").value);

  contadorIntentos++;
  document.getElementById("intentos").value =contadorIntentos;
  if (numero < numeroSecreto) {
    alert("le faltan" + (numeroSecreto - numero));
  }

  else if(numero<numeroSecreto) {
    alert("se paso" + (numero - numeroSecreto));
  }

  numero = parseInt(document.getElementById("numero").value);


  if (numero == numeroSecreto) {
    alert("usted es ganador");
  }

}