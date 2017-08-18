/*
1) Haciendo uso de funciones y new, realiza una "clase" Vikingo que almacene la información de un vikingo:

nombre
salud (0 - 100)
potenciaAtaque (1 - 20)
velocidad (0 - 100)
*/
function Vikingo(nombre, salud, potenciaAtaque, velocidad,armas, dinero){
	this._nombre = nombre;
	this._salud = salud;
	this._potenciaAtaque = potenciaAtaque;
	this._velocidad = velocidad;
	this._armas = [];
	this._dinero = generarNumeroAleatorioEntre(0,200);
};
/*
Bonus:

Añade un parámetro dinero a Vikingo (random entre 0 y 200)
Cuando un Vikingo mate a otro, le robará el dinero y las armas.

*/

/*
2) Haz uso de prototype y añade un método .ataca(vikingo) a un vikingo para que ataque a su oponente.
el ataque quitara salud al vikingo atacado (la potencia de ataque del atacante)
*/

Vikingo.prototype.atack = function(vikingo){
	if(this._armas.length > 0){

		var potenciaMaxima = 0;
		var indicePotenciaMax = 0;
		for (var i = 0; i<this._armas.length; i++) {
			var arma = this._armas[i]; 
			if(potenciaMaxima < arma._potencia ){
				indicePotenciaMax = i;
				potenciaMaxima = arma._potencia;
			}
		}
		vikingo._salud = vikingo._salud - potenciaMaxima;
		var armaMasPotente = this._armas[indicePotenciaMax];
		armaMasPotente.ataquesRestantes= armaMasPotente.ataquesRestantes-1;
		if(armaMasPotente.ataquesRestantes <= 0){
			abandonarArma(armaMasPotente);
		}
		console.log("*******CON ARMA********")

	}else{
		console.log("*******SIN ARMA********");
		vikingo._salud = vikingo._salud - this._potenciaAtaque;
		//carlos._salud = carlos.salud - saul._potenciaAtaque;
		if(vikingo._salud <0){
			vikingo._salud = 0;
		}
	}
}

Vikingo.prototype.abandonarArma = function(arma){
	var indice = this._armas.indexof(arma)
	if(indice != -1){
		this._armas.splice(indice, 1);
	}
}

/*
6) Modifica la función ataca del vikingo, para que si tiene armas disponibles ataque con el arma más potente.
Cada vez que se use un arma, debera restar uno a ataquesRestantes de ese arma.
Cuando el arma tenga 0 ataquesRestantes, el vikingo deberá abandonar el arma (añade la función abandonarArma al vikingo).
*/

//se crea en punto 5

Vikingo.prototype.addArma = function(){
	var tipoDeArmas = ["Cuchillo", "Espada","Mazo"];
	var numArmas = generarNumeroAleatorioEntre(0,3);

	for(var i=0; i < numArmas ; i++){
		var tipo = tipoDeArmas[generarNumeroAleatorioEntre(0,2)];
		var potencia = generarNumeroAleatorioEntre(20,50);
		var ataquesRestantes = generarNumeroAleatorioEntre(0,10);
		var arma = new Arma(tipo, potencia, ataquesRestantes);
		this._armas.push(arma);
	}

}

Vikingo.prototype.quitarDinero = function(vikingo){
	console.log(" dame tu dinero ");
	this._dinero = this._dinero + vikingo._dinero;
	vikingo._dinero = 0;
}

Vikingo.prototype.quitarArma = function(vikingo){
	this._armas.concat(vikingo._armas);
	vikingo._armas.splice(0,vikingo._armas.length);
	vikingo._armas = 0;
}

/*Se genera un numero aleatorio para asignarselos
a cada uno de los vikingos*/

function generarNumeroAleatorioEntre(minimo, maximo){
	var anchoFranjaNumerica = (maximo-minimo) + 1;
	var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);
	return numero;
}

/*Se genera un nombre en aleatorio para cada uno de los vikingos*/

function generarNombreVikingo(){
	var nombresVikingo = ["Leonidas", "Temistocles", "Estiliot", "Hercules", "Zoro", "Artemisa", "Ep-lof"];
	var indice = generarNumeroAleatorioEntre(0, nombresVikingo.length-1);

	return nombresVikingo[indice];
}

/*
3) Realiza una clase Batalla() que en su creación reciba dos vikingos.

Batalla tendrá un método iniciarPelea que realizará la pelea entre ambos vikingos.

Una batalla tendrá una serie de asaltos en los que:

atacará primero el que más valocidad tenga,
y quitará de salud al rival su potencia de ataque,
hasta que uno de los dos muera. (salud <= 0)
*/

function Batalla(vk1,vk2){
	this._vk1 = vk1;
	this._vk2 = vk2;
}

Batalla.prototype.iniciarPelea = function(){

	var pa1 = generarNumeroAleatorioEntre(1, 20);
	var pa2 = generarNumeroAleatorioEntre(1, 20);
	var vel1 = generarNumeroAleatorioEntre(0,100);
	var vel2 = generarNumeroAleatorioEntre(0,100);

	this._vk1 = new Vikingo(generarNombreVikingo(), 100, pa1, vel1);
	this._vk2 = new Vikingo(generarNombreVikingo(), 100, pa2, vel2);
	
	this._vk1.addArma();
	this._vk2.addArma();

	var atacante = null;
	var atacado = null;

	if(this._vk1._velocidad > this._vk2._velocidad){
		atacante = this._vk1;
		atacado = this._vk2;
	}
	else{
		atacante = this._vk2;
		atacado = this._vk1;
	}

	do{

		atacante.atack(atacado);
		console.log("Atacante: " + atacante._nombre + " tiene como salud "+ atacante._salud);
		console.log("Atacado: " + atacado._nombre + " tiene como salud "+ atacado._salud);
		console.log("Fin Pelea");
		var cambioTurno = atacado;
		atacado = atacante;
		atacante = cambioTurno;

	}while(atacante._salud >0 && atacado._salud>0);

	console.log("SE ACABO LA PELEA");
	if (atacante._salud == 0) {
		atacante.quitarDinero();
		atacante.quitarArma();
		}
	else{
		atacado.quitarDinero();
		atacado.quitarArma();
		}
}

/*
4) Crear la clase Arma() tenga un tipo: (espada/cuchillo...etc), una potencia (20 - 50) y un ataquesRestantes (0 -10).
*/

function Arma(tipo, potencia, ataquesRestantes){
	this._tipo = tipo;
	this._potencia = potencia;
	this._ataquesRestantes = ataquesRestantes;
}







/*
5) Añade una propiedad armas a Vikingo para que pueda poseer varias armaspara su batalla.
Añade el método addArma() para añadir armas a los vikingos,

6) Modifica la función ataca del vikingo, para que si tiene armas disponibles ataque con el arma más potente.
Cada vez que se use un arma, debera restar uno a ataquesRestantes de ese arma.
Cuando el arma tenga 0 ataquesRestantes, el vikingo deberá abandonar el arma (añade la función abandonarArma al vikingo).
*/

var batalla = new Batalla();
batalla.iniciarPelea();