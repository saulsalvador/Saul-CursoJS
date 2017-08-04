var array = ["Hola", "Frase corta", "Frase normalita", "Frase muy muy larga"];

var calculo = function(array){
	var maximoNumeroDeCaracteres = 0;

	var guardarLongitudSiEsMasGrande = function(string){
		if(string.length > maximoNumeroDeCaracteres){
			maximoNumeroDeCaracteres = string.length;
		}
	}

	array.forEach(guardarLongitudSiEsMasGrande);

	resultados.push(maximoNumeroDeCaracteres);
	console.log(resultados);

	return maximoNumeroDeCaracteres; 
}
console.log(calculo());