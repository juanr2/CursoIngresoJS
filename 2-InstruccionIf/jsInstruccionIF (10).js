function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var num;
	
	num=parseInt(Math.random()*(11-1)+1);
	
	if(num>=9)
	
	{
		alert(num+ " su nota es excelente");
	}
	
	else
	{
		if(num>=4)
		{
		alert(num+ " usted aprobó");
		}
		else
		
		{
		
		alert (num+ "usted desaprobó");
		
		}
	
	
	
	}
}//FIN DE LA FUNCIÓN