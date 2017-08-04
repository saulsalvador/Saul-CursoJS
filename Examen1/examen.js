/*

Vamos a realizar una biblioteca (Yujuuuuu!!)

es a la biblioteca: Amor, Aventuras, Naturaleza, Historia, Viajes
Añade 100 socios aleatorios a la biblioteca
Genera 1000 libros aleatoriamente y añádelos a la biblioteca.
Para ello haz uso de una función añadirLibro(libro) que deberá estar en el objeto biblioteca.
Los libros deberán colocarse en la sección apropiada según su temática.

7) Añade el método ejecutarCiclo() dentro de un socio
En cada ciclo un socio dejará los libros que tenía alquilados y cogerá varios (aleatorio entre 1-3) de forma aleatoria.
Para coger libros deberá hacer uso de una funcion de Biblioteca llamada dameLibroAleatorio();
Para dejar libros deberá hacer uso de una función de Biblioteca llamada devolverLibro(libro);

8) Realiza la función ejecutarCiclo para la biblioteca
La función ejecutarCiclo de biblioteca, llamará a ejecutar ciclo de todos sus socios

8) Crea un intervalo que se encargue de llamar a ejecutarCiclo de biblioteca cada segundo
Crea una función imprimirEstado en biblioteca, que se encargue de imprimir el estado de toda la biblioteca.

Por ejemplo:

Biblioteca Municipal:

Sección Amor
	Numero de libros: 80
Sección Aventuras
	Numero de libros: 80
Sección Naturaleza
	Numero de libros: 80
Sección Historia
	Numero de libros: 80
Sección Viajes
	Numero de libros: 80

Total de libros en la biblioteca: 400
Total de libros prestados a los socios: 600

*/


function generarNumeroAleatorioEntre(minimo, maximo){
	var anchoFranjaNumerica = (maximo-minimo) + 1;
	var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);
	return numero;
}

function generarNombreAleatorio(){
	var nombresSocio = ["Socio1", "Socio2", "Socio3", "Socio4", "Socio5", "Socio6", "Socio7", "Socio8", "Socio9", "Socio10"];
	var indice = generarNumeroAleatorioEntre(0, nombreSocio.length-1);

	return nombresSocios[indice];
}

function generaSocioRandom(){
	var socio = null;
	var sociosEnBiblioteca = [];

	for(var indiceSocio=0; indiceSocio<biblioteca._socios.length; indiceSocio++){
		var biblioteca = biblioteca._socios[indiceSocio];
		for(var indiceSocios=0; indiceSocios<biblioteca._socios.length; indiceSocio++){
			var socio = biblioteca._socios[indiceSocio];
			sociosEnBiblioteca.push(socio);
		}
	}

	var indiceAleatorio = generarNumeroAleatorioEntre(0, sociosEnBiblioteca.length-1);
	socio = sociosEnBiblioteca[indiceAleatorio];

	return socio;
}

function aleatorioSocioToBiblioteca(numeroDeSocios){
	for(var i=0; i<numeroDeSocios; i++){
		var socio = new Socio();
		var socioRandom = generaSocioRandom();

		if(socioRandom._numerodesocio>biblioteca._socios.length){
			socioRandom._numerodesocio.push(socio);
		}else{
			console.error(socio._nombre + " su numero de socio es: " + socioRandom._numerodesocio);
		}
	}
}

function generarLibros(libros){
	var numerodeLibros = 0;
	for (var i=0; i < numerodeLibros; i++){
		for (var j = 0; j >= 1000 ; j++) {
			var libro = new Libro();
			var libroRandom = generaSocioRandom();

			if(libroRandom >= 1000)
				biblioteca.push(libros);
	 	}
	}
	return libros;
}
function Biblioteca(nombre){
	this._nombre = nombre;
	this._secciones = [];
	this._socios = generaSocioRandom();
};

function Seccion(nombre){
	this._nombre = nombre;
	this._libros = [];
};

function socio(nombre, numerodesocio){
	this._nombre = nombre;
	this._numerodesocio = 0;
	this._libros = [];
};

function Libro(nombre, numerodepaginas, autor, tematica){
	this._nombre = nombre;
	this._numerodepaginas = 0 ;
	this._autor = autor;
	this._tematica = tematica;//(Puede ser Amor, Aventuras, Naturaleza, Historia o Viajes)
};


var biblioteca1 = new Biblioteca("La fuente del saber", seccion, socio);

var seccion1 = new Seccion("Amor", libros);
var seccion2 = new Seccion("Aventuras", libros);
var seccion3 = new Seccion("Naturaleza", libros);
var seccion4 = new Seccion("Historia", libros);
var seccion5 = new Seccion("Viajes", libros);

