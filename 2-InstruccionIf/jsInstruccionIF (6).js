function Mostrar()
{
//tomo la edad  

var edad=document.getElementById("edad").value;

if(edad>=18)
{
    alert("mayor de edad");
}

if(edad>13&&edad<18)

{
    alert("adolescente");
}

else

{
    alert("menor de edad");

}


}//FIN DE LA FUNCIÓN