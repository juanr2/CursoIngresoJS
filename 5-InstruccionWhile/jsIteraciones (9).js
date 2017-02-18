function Mostrar()
{
	var max;
	var min;
	var primera=true;
	var numero;
	var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='si')
	{

		
		numero=prompt("ingrese nùmeros");
		numero=parseInt(numero);
		
		if (primera)
		{
			primera=false;
			max=numero;
			min=numero;



		}

		else

		{
			if (numero>max)

			max=numero;

			if (numero<min)
			min=numero;



		}
	}




}//FIN DE LA FUNCIÓN