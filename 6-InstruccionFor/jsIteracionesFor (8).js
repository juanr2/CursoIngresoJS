function Mostrar()
{
    var numero=prompt("ingrese un numero");
    var cont=0;
  

    for(i=0;i<=numero;i++)

    {
        if(numero%i==0)

        {  

            cont++;
    

          }

          if(cont>2)
          {

              break;
          }
           }

            if(cont==2)
            {  
            alert("es primo");
            
             }

    




}//FIN DE LA FUNCIÓN