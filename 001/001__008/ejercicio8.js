/*
Escribe una función que reciba un string de números separados por dos puntos,
cree un array a partir del string y devuelva la media de todos lo valores
*/


function resivirCadena(string){
	var array = string.split(":");

	var resul=0;

	for (var i = 0; i < array.length; i++) {
		array[i]= parseInt(array[i]);
		resul = resul + array[i];

	}

	console.log(resul);
	resul = resul / array.length;

	return resul;
}



// Tests

var stringDeNumeros = '80:70:90:100';
// La función debe devolver 85

// Bonus

// Misma funcionalidad pero eliminando los repetidos
var stringDeNumeros1 = '80:70:90:100:100:100:100';
// también deberá devolver 85

console.log(resivirCadena(stringDeNumeros));