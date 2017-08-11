/*1) Realiza la clase Soldado que tenga lo siguientes atributos:

	- Nombre (aleatorio)
	- Salud (100)
	- Potencia de ataque (0)

Y los siguientes métodos:

	- Ataca(soldado) -> Recibirá un soldado y le quitará salud (la potencia de ataque que tenga).

(si, igual que en los vikingos :P)*/
/*
2) Realiza las siguientes clases:

SoldadoDeInfanteria que herede de Soldado, y tendrá las siguientes propiedades:
	- Potencia de ataque (Aleatorio 1-25)


SoldadoDeCaballeria que herede de Soldado, y tendrá las siguientes propiedades:
	- Potencia de ataque (Aleatorio 25-50)


SoldadoDeArtilleria que herede de Soldado, y tendrá las siguientes propiedades:
	- Potencia de ataque (Aleatorio 50-75)


SoldadoPilotoF18 que herede de Soldado, y tendrá las siguientes propiedades:
	- Potencia de ataque (Aleatorio 75-100)
*/
/*3) Realiza la clase Ejercito con los siguientes atributos:

	- Pais (aleatorio)
	- Soldados (array)
	- Bajas (array)

En su creación la clase Ejercito generará 1000 soldados:
	500 de Infanteria
	200 de Caballeria
	200 de Artillería
	100 pilotos de F18
*/


/*4) Realiza la clase Guerra, que recibirá dos ejercitos en su construcción.
La clase guerra deberá tener los siguientes atributos:
	- Numero de jornadas transcurridas: 0
	- Ejercito 1
	- Ejericto 2

La clase guerra deberá tener los métodos:
	- Iniciar guerra -> hará que empiecen a ejecutarse jornadas de manera consecutiva 
		(1 jornada cada 1000ms hasta que uno de los ejercitos se quede sin soldados)

	- Ejecutar jornada de guerra: en cada jornada de la guerra cada soldado de cada ejercito atacará a un soldado del ejercito contrario. 
		La elección del soldado al que atacará puede ser aleatoria
		Si un soldado muere (salud<=0) pasará al array de bajas de su ejército, y saldrá del array de soldados
		No importa qué ejercito empiece atacando.

	- Imprimir estado:
		Será ejecutado en cada jornada de la guerra y mostrará en la consola:
			- Numero de jornadas ejecutadas
			- Numero de soldados vivos en ejercito 1
			- Numero de soldado vivos en ejercito 2
			- Bajas ejército 1
			- Bajas ejército 2
*/

class Utilidaddes{
	generarNumeroAleatorioEntre(minimo, maximo){
		let anchoFranjaNumerica = (maximo-minimo) + 1;
		let numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);
		return numero;
	}

	generarNombreSoldado(){
		let nombresSoldado = ["Bryan","Beens","Jesse","Mia","Dominic"];
		let indice = this.generarNumeroAleatorioEntre(0, nombresSoldado.length-1);
		return nombresSoldado[indice];
	}

	generarPaisAleatorio(){
		let nombrePais = ["México","Alemania","Grecia","Rusia","Santa Lucía"];
		let indice = this.generarNumeroAleatorioEntre(0, nombrePais.length-1);
		return nombrePais[indice];
	}
}

class Soldado{
	constructor(nombre){
		this._nombre = nombre;
		this._salud = 100;
		this._potenciaDeAtaque = 0;
	}

	crearSoldado(soldado1,soldado2){
		this._soldado1 = soldado1;
		this._soldado2 = soldado2;
	}

	atacaSoldado(){
		/*let potenciaAtaque1 = new utilidades.generarNumeroAleatorioEntre();
		let potenciaAtaque2 = new utilidades.generarNumeroAleatorioEntre();*/

		this._soldado1 = new Soldado(utilidades.generarNombreSoldado(),100,0);
		this._soldado2 = new Soldado(utilidades.generarNombreSoldado(),100,0);

		soldado._salud = soldado._salud - this._potenciaDeAtaque;

		if(soldado._salud <0){
			soldado._salud = 0;
		}
		//console.log(soldado._salud);
	}
}

class SoldadoDeInfanteria extends Soldado{
	constructor(){
		this._potenciaDeAtaque = utilidades.generarNumeroAleatorioEntre(1,25);
	}
}

class SoldadoDeCaballeria extends Soldado{
	constructor(){
		this._potenciaDeAtaque = utilidades.generarNumeroAleatorioEntre(25,50);
	}
}

class SoldadoDeArtilleria extends Soldado{
	constructor(){
		this._potenciaDeAtaque = utilidades.generarNumeroAleatorioEntre(50,75);
	}
}

class SoldadoPilotoF18 extends Soldado{
	constructor(){
		this._potenciaDeAtaque = utilidades.generarNumeroAleatorioEntre(75,100);
	}
}
/*
En su creación la clase Ejercito generará 1000 soldados:
	500 de Infanteria
	200 de Caballeria
	200 de Artillería
	100 pilotos de F18
*/
class Ejercito {
	constructor(pais){
		this._pais = pais;
		this._soldados = [];
		this._bajas = [];
	}

	crearEjercito(pais1,pais2){
		this._pais1 = pais1;
		this._pais2 = pais2;

		let tipoDeSoldados = ["Infanteria", "Caballeria","Artillería","PilotosDeF8"];
		let numSoldados = utilidades.generarNumeroAleatorioEntre(0,4);

		for(var i=0; i < numSoldados ; i++){
			let tipoInfanteria = utilidades.generarNumeroAleatorioEntre(0,500);
			let tipoCaballeria = utilidades.generarNumeroAleatorioEntre(0,200);
			let tipoArtilleria = utilidades.generarNumeroAleatorioEntre(0,200);
			let tipoPilotos = utilidades.generarNumeroAleatorioEntre(0,100);

			let ejercito = new Ejercito(tipoInfanteria, tipoCaballeria, tipoArtilleria,tipoPilotos);
			this._soldados.push(ejercito);
		}

		this._pais1 = new Soldado(utilidades.generarPaisAleatorio(),this._soldados,0);
		this._pais2 = new Soldado(utilidades.generarPaisAleatorio(),this._soldados,0);
	}
}

class Guerra {
	constructor(){
		/*this._numeroDeJornadasTranscurridas = 0;
		let ejercito1 = ejercito.crearEjercito();
		let ejercito2 = ejercito.crearEjercito();*/
	}

	iniciarGuerra(){

	}
}

var utilidades = new Utilidaddes();
var soldado = new Soldado();
var ejercito = new Ejercito();

soldado.atacaSoldado();
console.log(soldado);