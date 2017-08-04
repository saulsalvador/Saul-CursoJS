/*

Realiza una función que reciba un string y devuelva un objeto contando el 
número de apariciones de cada letra en el string.
Almacena y devuelve el resultado en un objeto.

Asegúrate de que la función cumple su cometido haciendo uso de los tests aportados.

*/
var resul = {};

function cadenaAObjeto(miCadena){
	var arrayDeCaracteres = miCadena.split("");

	for (var i = 0 ; i < arrayDeCaracteres.length ; i++) {
	 	//resul = resul + arrayDeCaracteres[;

	 	var letra = arrayDeCaracteres[i];

	 	if(resul[letra]){
	 		resul[letra] = resul[letra] + 1;
	 	}else{
	 		resul[letra] = 1;
	 	}
	}

	return resul;
}

console.log(resul);

var cadena = cadenaAObjeto("abbabcbdbabdbdbabababcbcbab");
/*
resultado = {
	a: 3,
	d: 7,
	f: 4
}*/

// AYUDA:


// Tests

/*
resultadoContador = contadorDeCaracteres("abbabcbdbabdbdbabababcbcbab");
console.log( resultadoContador['a'] === 7);
console.log( resultadoContador.b === 14);
console.log( resultadoContador['c'] === 3);

resultadoContador = contadorDeCaracteres("xyyyxyxyxzyxyzyxyxyasdfz");
console.log( resultadoContador.x === 7 );
console.log( resultadoContador['y'] === 10 );
console.log( resultadoContador.z === 3 );
console.log( resultadoContador['a'] === 1 );
console.log( resultadoContador['s'] === 1 );
console.log( resultadoContador.d === 1 );
console.log( resultadoContador['f'] === 1 );*/