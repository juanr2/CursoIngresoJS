function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {

    case "Enero":
    case "Febrero":
    alert ("Que comiences bien el año");
    break;
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "junio":
    alert("A clases");
    break;
     case ("Diciembre"):
    alert ("Felices Fiestas");
    break;
    default: 
    alert ("Se vienen las vacaciones");
    break;
    

}
 /* if (mes=="Enero")

 {
     alert();

 }

elseif (mes=="Marzo")

{
    alert();
}

elseif (mes=="Julio")

{

    alert();
}

elseif (mes "Diciembre")
{

    alert ();
}
}//FIN DE LA FUNCIÓN