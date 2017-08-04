/*

Ejercicio 001__009: 
Realiza las funciones siguientes 

*/

// Esta función recibe un string y devuelve el string inverso

//var array1 = array2.concat(miarraylleno); ESTO ES PARA UNIR VARIOS Arrays
// Por ejemplo: para el string "Hola clase!" debe devolver "!esalc aloH"
function stringInverso(string) {
  console.log("******** TEXTO INVERSO *********");
  	/*return mensaje.split('').reverse().join('');*/
  	var i = mensaje.length;
  	var alreves = "";
    
    while (i>0) {
        alreves = alreves + mensaje.substring(i-1,i);
        i--;
    }
    return alreves;
}

// Esta función debe recibir un string y devolver el mismo string sin espacios
function eliminarEspacios(string) {
	// Con expresión regular
  console.log("******** ELIMINAR ESPACIOS *********");
	var textoSinEspacio = mensaje;
	textoSinEspacio = textoSinEspacio.replace(/\s/g, '');
	return textoSinEspacio;
}

// Esta función debe recinir un string y devolverlo con todas sus letras mayúsculas
function ponerTodasLasLetrasMayusculas(string){
  console.log("******** LETRAS MAYUSCULAS *********");
	var Mayusculas = mensaje;
	Mayusculas = Mayusculas.toUpperCase();

	return Mayusculas;

}

// Esta función debe recibir un string y decir si es un palíndromo (true / false)
// Un palíndromo es una frase que se lee igual al derecho que al revés
// Haz uso de las tres funciones anteriores
function esPalindromo(string) {
   console.log("******** PALINDROMO *********");
  var resultado = "La cadena \""+ mensaje +"\" \n";
  var iguales;

  var palindromo = mensaje;
  //console.log(palindromo);
  var palindromosinespacios = eliminarEspacios(palindromo);
  //console.log(palindromosinespacios);
  var palindromoreves = stringInverso(palindromo);
  //console.log(palindromoreves);

  for(var i in palindromosinespacios){
    if (palindromosinespacios[i] == palindromoreves[i]) {
      iguales = true;
    } else {
      iguales = false;
    }
  }

  if(iguales){
    resultado += "Es un palindromo";
  }
  else{
    resultado += "No es palindromo";
  }

  return resultado;
}

//  Ejemplos de palíndromos:

// Arde ya la yedra
// Ana lava lana
// Anita lava la tina
var mensaje = "Ana lava lana";

console.log(stringInverso(mensaje));
console.log(eliminarEspacios(mensaje));
console.log(ponerTodasLasLetrasMayusculas(mensaje));
console.log(esPalindromo(mensaje));