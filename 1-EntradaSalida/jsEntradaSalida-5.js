/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function Mostar()
{	/* problema 1

    var b;
    var h;
    var superficie;

    b=parseInt(document.getElementById("elNombre").value);
    h=parseInt(document.getElementById("laEdad").value);
    superficie=b*h;

    alert("La superficie del cuadrado es: "+ superficie);


    */

/*problema 2

var importe;



importe=parseInt(prompt("ingrese un importe"));

alert("el importe final por fin de temporada es: "+ (importe*0.75));


*/


/*problema3

    var precio1,precio2,precio3;

    precio1=parseInt(document.getElementById("elNombre").value);
    precio2=parseInt(document.getElementById("laEdad").value);
    precio3=parseInt(document.getElementById("importe").value);


    alert("La suma es "+(precio1+precio2+precio3)+ "y el promedio es:"+((precio1+precio2+precio3)/3));


*/

/* problema 4
    var a;
    var b;
    var suma;

    a=parseInt(prompt("ingrese un número"));
    b=parseInt(prompt("ingrese un segundo número"));
    suma=a+b;

    if(suma==0)

    {
        document.write("el numero es igual a 0");
    }

    else

    {
        if(suma>0)
        {
            document.write("el número es positivo");
        }

        else

        {
            document.write("el número es negativo");
        }
    }

*/

/*problema5
var mes;
mes=prompt("ingrese un mes");

switch(mes)

{
    case "enero":
    {alert("comienza el año");
    break;
    }


    case "diciembre":
    {
        alert("se acercan las fiesta");
        break;
    }

    default :

    {
        alert("no es diciembre ni enero");
    
    }
}
*/

/*problema 6

var peso;
var cont=0;
var primera=true;
var max;
var min;

    while(cont<4)

    {
        cont++;
        peso=parseInt(prompt("ingrese el peso en kg"));
    

    while(peso<=0)

         {
        peso=parseInt(prompt("ingrese un peso válido"));

         }

    if(primera)
         {  
    primera=false;
    max=peso;
    min=peso;
         }

    else 
             {  
        if(peso>max)
    {
      max=peso;
    }
         if(peso<min)

    {
        min=peso;
    }
             }
    }

    alert("el mas pesado es: "+ max+" y el menos pesado es: "+ min );
   

    

    */
    /*problema7

    var edad;
    var sexo;
    var cont=0;
    var primera=true;
    var suma=0;
    var promedio;
    var contadorvarones=0;


        while(cont<4)
        {
            cont++;
            edad=parseInt(prompt("ingresar edad"));

            while(edad>100||edad<0)

            {
                edad=parseInt(prompt("ingrese una edad válida"));

            }

            sexo=prompt("ingrese sexo");

            while(sexo!="m"&&sexo!="f")

            {
                sexo=prompt("ingrese sexo válido");
            }

            if (primera)
            {
                primera=false;
                max=edad;
                min=edad;
            }
            
            else 
            {
                if(edad<min)
                {
                    min=edad;
                }

                if (edad>max)
                {
                    max=edad;
                }


            }

                suma+=edad;
                promedio=suma/4;

                if (sexo=="m"&&edad>=20)

                {
                    contadorvarones++;
                }


        }

            alert("promedio edad "+promedio+" ,edad mas baja "+min+" ,cantidad varones mas de 20: "+contadorvarones)


            */


            var num;
            var rta;
            var contarpares=0;
            var sumat=0;
            var primera=true;
            var cont=0;

       

            while(rta!="si")

        {
            num=parseInt(prompt("ingrese un numero positivo"));
            rta=prompt("desea salir");
            cont++;
        

            while(num<0)
            {
                num=parseInt(prompt("ingrese un numero válido"));
            }

            if(num%2==0)

            {
                contarpares++;
            }

            sumat+=num;
            promedio=sumat/cont;

            if(primera)

            {
                primera=false
                max=num;
                min=num
            }
            else
            {   

            if(num<min)
            {
                min=num;
            }
            if (num>max)

            {
                max=num;
            }

            }
        }

    
        document.write("cantidad de pares: "+contarpares+ " ,promedio de numeros ingresados: "+ promedio+ " ,la suma de todos los numeros: "+ sumat+ " ,maximo: "+max+ " ,minimo: "+min);
}




