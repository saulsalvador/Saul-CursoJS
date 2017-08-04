var misStrings = ["Hola", "Frase corta", "Frase normalita", "Frase muy muy larga"];

function calcular(misStrings){
	var maximoNumeroDeCaracteres = 0;

	var guardarLongitudSiEsMasGrande = function(string){
		if(string.length > maximoNumeroDeCaracteres){
			maximoNumeroDeCaracteres = string.length;
			console.log(maximoNumeroDeCaracteres);
		}
		misStrings.forEach(guardarLongitudSiEsMasGrande);

	}

	misStrings.forEach(guardarLongitudSiEsMasGrande);
	return maximoNumeroDeCaracteres; 
}

console.log(calcular(misStrings));

/*

var misStrings = ["Hola", "Frase corta", "Frase normalita", "Frase muy muy larga"];

var calculo = function(arrayDeStrings){
	var maximoNumeroDeCaracteres = 0;

	var guardarLongitudSiEsMasGrande = function(string){
		if(string.length > maximoNumeroDeCaracteres){
			maximoNumeroDeCaracteres = string.length;
		}
	}

	misStrings.forEach(guardarLongitudSiEsMasGrande);

	return maximoNumeroDeCaracteres; 
}
console.log(misStrings);*/