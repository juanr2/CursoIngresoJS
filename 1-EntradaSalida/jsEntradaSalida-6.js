/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
 var numeroUno=parseInt (document.getElementById("numeroUno").value);

 var numeroDos=parseInt(document.getElementById("numeroDos").value);

var suma;

suma= numeroUno + numeroDos;

alert (suma);
}

