function Mostrar() {
	var numero = 10;
	var acum = 0;
	var cont = 0;


	while (numero > 0) {
		console.log(numero);
		numero--;
		cont++;
		acum += numero ;
	}
console.log(cont);
console.log(acum);
}//FIN DE LA FUNCIÓN