function Mostrar()
{
	var num;
	var rta;
	var cantneg=0;
	var sumaneg=0;
	var promneg,prompos;
	var sumapos=1;
	var pares;
	var dif;
	var cantpos=1;

	while(rta!="si")
	{
		num=parseInt(prompt("Ingrese un numero"));
		rta=prompt("¿Desea salir de la aplicación?");

		if(num<0)

		{
			cantneg++;
			sumaneg+=num;
			promneg=sumaneg/cantneg;

		}
		else
		{
			cantpos++;
			sumapos+=num;
			prompos=sumapos/cantpos;
		}
	}

		pares=num%2==0;
		dif=sumapos-sumaneg;

	
	document.write(cantneg," ",sumaneg," ",promneg," ",cantpos," ",sumapos," ",prompos," ",pares," ",dif);
	
	}
//FIN DE LA FUNCIÓN