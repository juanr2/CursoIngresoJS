function Mostrar()
{
    var numero=prompt("ingresar un  numero");
    var d=0;


    for(var i=1;i<numero;i++)

        {

            if(numero%i==0)
            {   
            console.log(i);
           d++;
           }

        }

        alert(d);

}//FIN DE LA FUNCIÓN