function Mostrar()
{
	
	var numero=prompt("ingrese un numero de 0 a 9");

	while (numero<0||numero>9)

	{
		numero=prompt(" Error: vuelva a ingresar un numero del 0 a 9");
	}

	document.getElementById("Numero").value=numero;
	console.log(numero);
}//FIN DE LA FUNCIÓN