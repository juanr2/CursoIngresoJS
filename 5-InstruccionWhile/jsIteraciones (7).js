function Mostrar()
{
    var numero=0;
    numero=parseInt(numero);
    var cantidadacumulada=0;
    var promedio;
    promedio=parseInt(promedio);
    var contador=0;


    while(numero!="si")
    {
         contador++;
         numero=parseInt(numero);

        numero=prompt("ingrese numeros");
        cantidadacumulada+=numero;

        if (numero=="si")
        {
            break;
        }




    }
    promedio=cantidadacumulada/contador;


console.log(cantidadacumulada);
console.log(promedio);



}//FIN DE LA FUNCIÓN