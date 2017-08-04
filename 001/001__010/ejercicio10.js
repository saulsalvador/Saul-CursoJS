// Funciones auxiliares
function generarNumeroAleatorioEntre(minimo, maximo){
	var anchoFranjaNumerica = (maximo-minimo) + 1;
	var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);

	return numero;
}

function generarNombreAleatorio(){
	var nombresNegados = ["Carlos", "Daniel", "Fabian", "Juan Carlos", "Bryan", "Saul", "Christian", "Marcel", "Ronal", "David", "Fran"];
	var indice = generarNumeroAleatorioEntre(0, nombresNegados.length-1);

	return nombresNegados[indice];
}

function dameRecintoAleatorio(){
	var recinto = null;
	var recintosEnMiZoo = [];

	for(var indiceArea=0; indiceArea<zoo.areas.length; indiceArea++){
		var area = zoo.areas[indiceArea];
		for(var indiceRecintos=0; indiceRecintos<area.recintos.length; indiceRecintos++){
			var recinto = area.recintos[indiceRecintos];
			recintosEnMiZoo.push(recinto);
		}
	}

	var indiceAleatorio = generarNumeroAleatorioEntre(0, recintosEnMiZoo.length-1);
	recinto = recintosEnMiZoo[indiceAleatorio];

	return recinto;
}

// Añade personas de forma aleatoria
function insertarPersonasAleatoriamente(numeroPersonas){
	for(var i=0; i<numeroPersonas; i++){
		var persona = crearPersonaAleatoria();
		var recintoAleatorio = dameRecintoAleatorio();

		if(recintoAleatorio.aforoMaximoPersonas>recintoAleatorio.personas.length){
			recintoAleatorio.personas.push(persona);
		}else{
			console.error(persona.nombre + " no cabe en el recinto " + recintoAleatorio.nombre);
		}
	}
}


var zoo = {
	nombre: "El último zoológico",
	ubicacion: {},
	areas: [],
	caja: 0, 
	aforoMaximoPersonas: 0,
};

var ubicacion = {
	direccion: "Calle de los animalitos 123",
	ciudad: "Ciudad de México",
	pais: "México",
	telefono: 999888777
}

// Seteamos la ubicacion
zoo.ubicacion = ubicacion;

function crearArea(nombre){
	var area = {
		nombre: nombre,
		aforoMaximoPersonas: 0,
		recintos: [],
	};

	return area;
}

function crearRecinto(nombre, aforoMaximoPersonas, aforoMaximoAnimales, detalle){
	return {
		nombre: nombre,
		animales: [],
		personas: [],
		aforoMaximoPersonas: aforoMaximoPersonas,
		aforoMaximoAnimales: aforoMaximoAnimales,
		detalle: detalle
	};
}

function crearAnimal(nombre, especie, salud, hambre, pais){
	return {
		nombre: nombre,
		especie: especie,
		salud: salud,
		hambre: hambre,
		pais: pais
	};
}

function crearPersonaAleatoria(){
	return {
		nombre: generarNombreAleatorio(),
		edad: generarNumeroAleatorioEntre(1, 90),
		dinero: generarNumeroAleatorioEntre(0, 1000)
	
	}
}

function addRecintoToArea(recinto, area){
	area.recintos.push(recinto);
	area.aforoMaximoPersonas = area.aforoMaximoPersonas + recinto.aforoMaximoPersonas;
}

function addAreaToZoo(zoo, area){
	zoo.areas.push(area);
	zoo.aforoMaximoPersonas = zoo.aforoMaximoPersonas + area.aforoMaximoPersonas;

}

// Creo animales
var tigreBlanco = crearAnimal("Tigre Blanco", "Felino", 100, 80, "Egipto");
var tigreNormal = crearAnimal("Tigre", "Felino", 90, 60, "Africa");
var avestruz = crearAnimal("Avestruz", "Avis Chilensis", 100, 100, "Chile");
var flamenco = crearAnimal("Flamenco", "Phoenicopteridae", 5, 100, "Colombia");
var tiburonBlanco = crearAnimal("Tiburon Blanco", "Pez", 50, 100, "Mexicano");
var pejeLagarto = crearAnimal("Peje Lagarto", "Pez", 30, 100, "Norte America");
var cocodrilo = crearAnimal("Cocodrilo", "Reptiliano", 100, 100,"Asia");
var tortuga = crearAnimal("Tortuga", "Reptiliano", 40, 60, "Mexico");

// Creo recintos 
var recintoTigres = crearRecinto("Jaula de tigres", 50, 30, "Jaula super reforzada con titanium");
var recintoAves = crearRecinto("Jaula para aves no voladoras", 100, 80, "Algunas aves se pelean mucho");
var recintoAcuaticos = crearRecinto("Estanque de peces", 90, 50, "Algunos peces son de colores");
var recintoReptiles = crearRecinto("Reptilianos", 80, 100,"La mayoria de los reptiles son exoticos.")

// Creo areas
var areaMamiferos = crearArea("Mamíferos", 5000);
var areaAves = crearArea("Aves", 200);
var areaMarinos = crearArea("Marinos", 1000);
var areaReptiles = crearArea("Reptiles", 100);

// Añado los animales a los recintos
recintoTigres.animales.push(tigreBlanco, tigreNormal);
recintoAves.animales.push(avestruz, flamenco);
recintoAcuaticos.animales.push(tiburonBlanco,pejeLagarto);
recintoReptiles.animales.push(cocodrilo, tortuga);

// Añado los recintos a las áreas
//areaMamiferos.recintos.push(recintoTigres);
//areaAves.recintos.push(recintoAves);
addRecintoToArea(recintoAves,areaAves);
addRecintoToArea(recintoTigres, areaMamiferos);
addRecintoToArea(recintoReptiles, areaReptiles);
addRecintoToArea(recintoAcuaticos, areaMarinos);

//Añado las áreas al zoo
addAreaToZoo(zoo, areaMarinos);
addAreaToZoo(zoo, areaReptiles);
addAreaToZoo(zoo, areaMamiferos);
addAreaToZoo(zoo, areaAves);
//zoo.areas.push(areaMamiferos, areaAves);

// Añado 100 personas
insertarPersonasAleatoriamente(1000);

console.log(zoo);