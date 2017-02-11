function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch (mesDelAño)
    
    {
        case "Febrero":
        alert ("Tiene 28 dìas");
        break;

        case "Abril":
        case "Junio":
        case "Septiembre":
        alert ("Tiene 30 días");
        break;

        default:
        alert ("Tiene 31 días");
        break;




    }



}//FIN DE LA FUNCIÓN