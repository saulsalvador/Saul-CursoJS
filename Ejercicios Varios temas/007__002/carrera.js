/*
Ejercicio 007__001

3) Pinta en tu html la carrera. Haz uso de funciones de manejo del DOM, y haz uso de CSS para modificar su posición.
 Los coches deberán desplazarse desde la izquierda de la pantalla hasta la derecha donde se encontrará la meta.

AYUDA:
 */
/*
1) Modela la clase Vehículo, con las siguientes propiedades:

Marca (aleatorio)
Modelo (aleatorio)
VelocidadMaxima (aleatorio entre 100kmh y 200kmh)
Imagen*/

 function Utilidades(){

 }

Utilidades.prototype.generarNumeroAleatorioEntre = function(minimo, maximo){
	var anchoFranjaNumerica = (maximo-minimo) + 1;
	var numero = Math.floor((Math.random() * anchoFranjaNumerica) + minimo);
	return numero;
}

Utilidades.prototype.generarNombreMarca = function(){
	var nombresMarca = ["Nissan", "Ford"];
	var indice = utilidades.generarNumeroAleatorioEntre(0, nombresMarca.length-1);

	return nombresMarca[indice];
}

Utilidades.prototype.generarNombreModelo = function(){
	var nombresModelo = ["Tsuru", "Fusion"];
	var indice = utilidades.generarNumeroAleatorioEntre(0, nombresModelo.length-1);

	return nombresModelo[indice];
}



var utilidades = new Utilidades();

function getMetrosQueAvanzaCadaSegundo(velocidadEnKmh){
    var metros = velocidadEnKmh*1000/3600;
    return metros;
}

 function Vehiculo(marca,modelo,velocidadMaxima,imagen){
 	this._marca = marca;
 	this._modelo = modelo;
 	this._velocidadMaxima = velocidadMaxima;
 	this._imagen = imagen;
 	this._posicion = 0;
 }

 /*2) Realiza la clase carrera que recibirá dos vehículos en su consctrucción. 
La clase carrera tendrá el método iniciarCarrera() que hará que los dos vehículos compitan.

Una carrera consistirá en ver qué vehículo recorre primero 500 metros.
Para ser realista deberás hacer que los vehículos avancen cada segundo los 
metros correspondientes a sus velocidad.

Ganará el que recorra antes los 200 metros. En caso de llegar a la vez, quedarán empatados e irán a penales. 

Naaaaaaaaah, no hay penales. Pero sí que pueden empatar.*/

function Carrera(vehiculos){
	this._vehiculos = [];
	this._vehiculosPorOrdenDeLlegada = [];
	this._recorrido = 500;
};
//Un prototype es una funcion que sera compartida por la clase
Carrera.prototype.crearVehiculos = function(numero){
	for (var i = 0; i < numero; i++) {
		var marca = utilidades.generarNombreMarca();
		var modelo = utilidades.generarNombreModelo();
		var velocidadMaxima = utilidades.generarNumeroAleatorioEntre(100,200);
		var imagen = "vehiculos/vehiculo" + utilidades.generarNumeroAleatorioEntre(1,10) +".png";
		var vehiculo = new Vehiculo(marca,modelo,velocidadMaxima,imagen);
		this._vehiculos.push(vehiculo);
	}
}

var idInterval=0;

Carrera.prototype.iniciarCarrera = function(){
	this.crearVehiculos(2);	


	idInterval = setInterval(function(){carrera.avanzarCarrera()},1000);
}

Carrera.prototype.avanzarCarrera = function(){
	//recorriendo vehiculos
	console.log("*****AVANZAR CARRERA*****");
	for (var i =0; i < this._vehiculos.length; i++) {
		var vehiculo = this._vehiculos[i];
		vehiculo._posicion = (vehiculo._posicion + getMetrosQueAvanzaCadaSegundo(vehiculo._velocidadMaxima));
		console.log("El vehiculo de marca "+vehiculo._marca+ " y modelo "+vehiculo._modelo+" tiene una posicion de: "+vehiculo._posicion)
		
		if(vehiculo._posicion>this._recorrido){
			vehiculo._posicion = this._recorrido;
		} 
	}

	var todosHanLlegado = true;

	for (var i = 0; i < this._vehiculos.length; i++) {
		vehiculo = this._vehiculos[i];
		if(vehiculo._posicion < this._recorrido  ){
			todosHanLlegado = false;
		}
	}

	if(todosHanLlegado){
		console.log("A TERMINADO LA CARRERA");
		clearInterval(idInterval);
	}
	if(vehiculo._posicion >= this._recorrido){
		console.log("Eres el primero en llegar "+ vehiculo._marca+ " " +vehiculo._modelo);
		}
	else{
		console.log("Eres el segundo en llegar "+ vehiculo._marca+ " " +vehiculo._modelo);
	}


	//si todos todos lso vehiculos ya llegaron a la meta entonces termino la carrera

	

	//recorrer todos los vehiculos
	//muevo cada vehiculo
	//verifico cada vehiculo si llego A LA META, SI LLEGO EL VEHICULO YA NO SE MUEVE
	//VERIFICO SI TODOS LOS VEHICLOS LLEGARON A LA META EN ESTE CASO SE TERMINO LA CARRERA
}

//se crea onjeto de la clase carrera
var carrera = new Carrera();
//se ejecuta la funcion iniciarCarrera con el objeto de la clase carrera
carrera.iniciarCarrera();
console.log(carrera);
