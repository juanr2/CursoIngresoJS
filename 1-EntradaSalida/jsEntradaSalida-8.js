/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo=parseInt(document.getElementById("numeroDividendo").value);
    var numeroDivisor=parseInt(document.getElementById("numeroDivisor").value);

    var division=parseInt(numeroDividendo/numeroDivisor);
    var resultado=numeroDivisor*division;
    var resto= numeroDividendo-resultado;
     alert ("El resto es"+resto);

}
