function calcularDni(numeroDni){
	var listadoLetras = "TRWAGMYFPDXBNJZSQVHLCKE";
	var arrayLetras = listadoLetras.split("");
	var resultado = "";
	if (typeof(numeroDni != "number")) {
		resultado = "Debes introducir un valor numérico";
	}else{
		var numeroDniAsString = numeroDni + "";
		if (numeroDniAsString.length != 8) {
			resultado = "Debes introducir un numero de 8 cifras";
		}else{
			if (numeroDni<0) {
				resultado = "Debes introducir un valor positivo";
			}else{
				var resto = numeroDni % 23;
				resultado = arrayLetras[resto];
			}
		}
	}
	return resultado;
}
console.log(calcularDni(12312312) == 'k');
//console.log(calcularDni(12312312) === 'k');*/