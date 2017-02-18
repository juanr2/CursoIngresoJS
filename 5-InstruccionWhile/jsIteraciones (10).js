function Mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero;
	var positivos;
	var negativos;
	var acum;

	while(respuesta!="no")
	{
		
		contador++;
		numero=prompt("ingrese numeros");
		numero=parseInt(numero);


		if (numero>0)

		{ 
		 acum+=numero;
		 alert(acum);
		}

		
	
	}




}//FIN DE LA FUNCIÓN