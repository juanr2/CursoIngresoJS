function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var nota=parseInt(Math.random()*10);

	if(nota>=9)
{
	alert(nota+" excelente");

}

	if(nota<9&&(nota>=4))

{
		alert (nota+" aprobo");
}

	else 

	{
		alert(nota+" vamos la proxima se puede");
	}

}//FIN DE LA FUNCIÓN