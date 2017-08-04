var dni= "";

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z','S','Q','V','H','L','C','K','E'];
 console.log("Letra de termino del DNI");
var calcular = function(dni){
	
	var indice = dni % 23;

	var letra = letras[indice];

	return letra;
}

 console.log(calcular(12312312));