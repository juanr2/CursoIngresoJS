/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{

/*problema1
    var lado=parseInt(document.getElementById("numeroUno").value);
    

    alert("el perímetro es: " +lado*4)
 */

/* PROBLEMA2

    var importe=parseInt(document.getElementById("numeroUno").value);

    alert("importe final con iva es : "+ importe*1.21);

*/

/*PROBLEMA3

    var l=parseInt(document.getElementById("numeroUno").value);
    var a=parseInt(document.getElementById("numeroDos").value);


    alert("se necesitarán:"+(l+a)*6+"  metros de alambre");
*/

/*PROBLEMA4
        var num1=parseInt(prompt("ingrese un número"));
        var num2=parseInt(prompt("ingrese otro número"));
        var resultado;

        if (num1==num2)

        {
            resultado=num1*num2;
        }

        else
        {
            if(num1>num2)

            {
                resultado=num1-num2;
            }

            else

            {
                resultado=num1+num2;
            }

        }

        document.write("el resultado es: "+ resultado);

        */

/* Prolema5
        var dia=prompt("ingrese un dia");

        switch(dia)

        { 
            case "sabado":
            case "domingo":
            {
            alert("es fin de semana");
            break;
             }

        default :
        {
            alert("a trabajar");
        }

        }


*/

/*

 var cont=0;
 var primera=true;
 var importe;

    while(cont<24)
    {
        importe=parseInt(prompt("ingrese un importe"));
        cont++;

        while(importe<0)
        {
            importe=parseInt(prompt("ingrese un importe válido"));
        }

        if(primera)
        {
            primera=false;
            max=importe;
            min=importe;
        
        }
        else
        {
            if(importe<min)
            {
                min=importe;
            }
            if(importe>max)
            {
                max=importe;
            }

         }
    }
    alert("el mayor importe fue: "+max +"  , y el menor importe fue: "+ min);

*/

/*PROBLEMA7
    var cont=0;
    var nota;
    var suma=0;
    var primera=true;
    var max;
    var min;
    var contadorvarones=0;

        while(cont<10)
        {
            nota=parseInt(prompt("ingrese la calificación"));
            cont++;
            

            while(nota<0||nota>10)

            {
                nota=parseInt(prompt("ingrese una nota válida"));
            }
            
            sexo=prompt("ingrese el sexo");

            while(sexo!="m"&&sexo!="f")

            {
                sexo=prompt("ingrese un sexo válido");
            }

            suma+=nota;
            promedio=suma/cont;

            if (primera)

            {
                primera=false;
                max=nota;
                min=nota;

            }
            else
            {
                if(nota<min)
               {   min=nota;}

               if(nota>max)
               {
                   max=nota;
               }
            }

            if(sexo=="m"&&nota>=6)
            {
                contadorvarones++;
            }

        }

        alert("el promedio es: "+promedio+"la nota mas baja es: "+ min+ "cantidad de varones con nota igual o mayor a seis es: "+contadorvarones);
*/
     var num;
     var rta;
     var cont=0;
     var contarpares=0;
     var suma=0;
     var primera=true;
     var max;
     var min;

        while(rta!="si")   
        {
            num=parseInt(prompt("introduzca un numero"));
            rta=prompt("desea salir");
            cont++;
            suma+=num;

            while(num<0)

            {
                num=parseInt(prompt("ingrese un numero válido"));
            }

            if(num%2==0)
            {
                contarpares++;
            }

            promedio=suma/cont;

            if(primera)
            {
                primera=false;
                max=num;
                min=num;
            }

            else{

                if(num<min)
                {
                    min=num;
                }
                if(num>max)

                {
                    max= num;
                }
            }

        }

        document.write("cantidad de numeros pares:  "+contarpares+"  /promedio de todos los numeros: "+promedio+ " /suma de todos los numeros: "+ suma+ " /maximo: "+max+ " /minimo: "+min);

}
