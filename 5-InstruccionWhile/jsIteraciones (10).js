function Mostrar()
{
	var num;
	var rta;
	var cantneg=0;
	var sumaneg=0;
	var promneg=0,prompos=0;
	var sumapos=0;
	var pares=0;
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

		if(num%2==0){
           pares++;
		}
	}

	
		dif=sumapos-sumaneg;
	
	document.write("cant.neg:" + cantneg + " .suma neg: " + sumaneg + ". prom.neg: "+ promneg + ".cant pos: " + cantpos + ",sum pos: " + sumapos + ". prom pos: " + prompos + "cant pares: " + pares + " .dif:" + dif);
	
	}
//FIN DE LA FUNCIÓN