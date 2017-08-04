/*

Haciendo uso del zoo que definimos en el ejercicio anterior,
vamos a añadirle funcionalidad:

1) Haz una función que añada un visitante nuevo:
	Si el zoo está lleno no podrá entrar.
	Para entrar deberá pagar la entrada que dependerá de:
		Niños <14 años: gratis
		Personas mayores >65 gratis
		Resto: 5$
		Estudiantes: 3$
	Este importe deberá ser restado del dinero del visitante y añadido a la caja del zoo

	El visitante irá a un área y una recinto aleatoria,
	si esta está llena, deberá buscar otro lugar

2) Crea una función que se llame ejecutarCiclo() que simule el paso de 1 hora en el zoo, deberá:
	- Añadir visitantes al parque y también los retire del parque
	- Deberá quedar reflejado que ha pasado un ciclo en el importe de las personas (tendrán menos dinero) y en la caja del parque (habrá ganado dinero)

	(El ciclo simula ser una hora del parque, pero lo ejecutamos cada 3seg)

3) Crea una funcionalidad que simule el paso de un ciclo en un animal:
	- Su salud se verá afectada disminuyendo o aumentando 10 (de forma aleatoria).
	- Si la salud del animal descience por debajo de 50, este debéra ir a la enfermería.
	- También el animal tendrá más hambre cada hora que pase (+10) cuando llegue a 100 deberá ser alimentado y pasará a tener hambre 0.

4) Asocia la funcionalidad anterior a la función de ejecutarCiclo() de manera que los animales vayan variando su salud y su hambre.
De vez en cuando algunos animales deberán ir a la enfermería (salud menor de 50) donde recuperarán 10 de salud hasta llegar a 100. 
Al llegar a 100 deberán volver a su recinto.
*/
// Funciones auxiliares

function introducirVisitante(){
	  var person = crearPersonaAleatoria();
	  var cobro = 0;
	if(person.edad < 14){
		console.log("Entra gratis");
		cobro = 0;
	}
	else{
		if(person.edad > 65){
			console.log("Adulto mayor gratis");
			cobro = 0;
		}
		else{
			if(person.estudiante == 0){
				cobro = 5;

				console.log("No es estudiante paga: " + cobro+ " $");
			}
			else{
				cobro = 3;
				console.log("Usted es estudiante paga: "+cobro+" $");
			}
		}
	}
	if(zoo.dinero >5 && cobro > 5 ){
		person.dinero = person.dinero - cobro;
		zoo.caja = zoo.caja + cobro;
		console.log("Adelante puede ingresar");
	}else{
		console.log("Usted  no puede ingresar");
	}

	var recintoNuevo = dameRecintoAleatorio();
	console.log(recintoNuevo);

	if(recintoNuevo.aforoMaximoPersonas == recintoNuevo.personas.length){
		console.log("Busca otro lugar aqui esta lleno");
	}else{
		console.log("Puede ingresar");
	}
}

/*2) Crea una función que se llame ejecutarCiclo() que simule el paso de 1 hora en el zoo, deberá:
	- Añadir visitantes al parque y también los retire del parque
	- Deberá quedar reflejado que ha pasado un ciclo en el importe de las personas (tendrán menos dinero) y en la caja del parque (habrá ganado dinero)

	(El ciclo simula ser una hora del parque, pero lo ejecutamos cada 3seg)
*/
function ejecutarCiclo(){
	insertarPersonasAleatoriamente(10);
	console.log(" !!!!!!!! CICLO EN EJECUCION !!!!!!!!!!");
	console.log(zoo);


	for (var a = 0; a < zoo.areas.length; a++) {
		var area = zoo.areas[a];
		for (var r = 0; r < area.recintos.length; r++) {
			var recinto = area.recintos[r];
			for (var bestia = recinto.animales.length-1; bestia >=0 ; bestia--) {
				 var animal = recinto.animales[bestia];
				//console.log("areas "+ a + " recintos "+ r + " animales " +bestia);
				if(Math.random() < 0.5){
					animal.salud -= 10;
				}else{
					animal.salud += 10;
				}

				if(animal.salud < 50){
					var enfermeria = {
					animal: animal,
					recinto: recinto
				}

					zoo.enfermería.push(enfermeria);

					recinto.animales.splice(bestia,1);
				}

				animal.hambre += 10;

				if(animal.hambre >=100){
					animal.hambre = 0;
				}

				console.log("El animal " + animal.nombre +" especie: " + animal.especie + " salud " + animal.salud + " con hambre " + animal.hambre);
			}
		}
	}
}

/*3) Crea una funcionalidad que simule el paso de un ciclo en un animal:
	- Su salud se verá afectada disminuyendo o aumentando 10 (de forma aleatoria).
	- Si la salud del animal descience por debajo de 50, este debéra ir a la enfermería.
	- También el animal tendrá más hambre cada hora que pase (+10) cuando llegue a 100 deberá ser alimentado y pasará a tener hambre 0.
*/

function cicloAnimal(animal){

}

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
	enfermería: [],
	aforoMaximoPersonas: 0,
	caja: 0
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
		dinero: generarNumeroAleatorioEntre(0, 1000),
		estudiante: generarNumeroAleatorioEntre(0,1)
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
addRecintoToArea(recintoAves, areaAves);
addRecintoToArea(recintoTigres, areaMamiferos);
addRecintoToArea(recintoReptiles, areaReptiles);
addRecintoToArea(recintoAcuaticos, areaMarinos);



//Añado las áreas al zoo
addAreaToZoo(zoo, areaMarinos);
addAreaToZoo(zoo, areaReptiles);
addAreaToZoo(zoo, areaMamiferos);
addAreaToZoo(zoo, areaAves);
//zoo.areas.push(areaMamiferos, areaAves);

setInterval(ejecutarCiclo, 3000);
console.log(zoo);