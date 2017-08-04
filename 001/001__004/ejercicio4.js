/*

Vamos a complicar el ejercicio anterior:
Ahora cada vez que calculemos la longitud del string más largo, almacenaremos el resultado en un array de resultados.
Una vez ejecutados varios cálculos de longitud (4 en el ejemplo), vamos a calcular la media de los resultados.

*/
var calculo = function(misStrings){
	var maximoNumeroDeCaracteres = 0;

	var guardarLongitudSiEsMasGrande = function(string){
		if(string.length > maximoNumeroDeCaracteres){
			maximoNumeroDeCaracteres = string.length;
		}
	}

	misStrings.forEach(guardarLongitudSiEsMasGrande);

	resultados.push(maximoNumeroDeCaracteres);

	return maximoNumeroDeCaracteres; 
}

var media = function(){
		var resul = 0;
			for ( var i = 0; i < resultados.length ; i++){		
				resul = resul + resultados[ i ];
			}
			resul= resul / resultados.length;
	return resul;
}

var resultados = [];

var misStrings = ["Hola", "Frase corta", "Frase normalita", "Frase muy muy larga"];
var arrayDeTest1 = ["Richie", "Joanie", "Greg", "Marcia", "Bobby"];
var arrayDeTest2 = ["Blanka", "Zangief", "Chun Li", "Guile"];
var arrayDeTest3 = ["Red", "Blue", "Green"];
var arrayDeTest4 = ["Hola", "Frase corta", "Frase normalita", "Frase muy muy larga"];

calculo(arrayDeTest1);
calculo(arrayDeTest2);
calculo(arrayDeTest3);
calculo(arrayDeTest4);

console.log(resultados);
console.log(media(misStrings));



// resultados = [6, 7, 5, 19];
//media(resultados) ==> 9,25

