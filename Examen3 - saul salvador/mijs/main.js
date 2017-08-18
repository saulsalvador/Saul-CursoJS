class MainController{
	constructor(){
		this._container = null;
		this._divPokemons = null;
		this._apiClient = new ApiClient();
		this._pokemonApiClient = new PokemonApiClient(this._apiClient);
		this._almacenPokemons = new AlmacenPokemons();
	}


	init(){
		this.pintarEstructura();
		this._almacenPokemons.init(this._divPokemons, this._pokemonApiClient);
	}

	pintarEstructura(){ 
		this._container = document.createElement("div");
		this._container.setAttribute("class","container");

		this._divPokemons = document.createElement("div");
		this._divPokemons.setAttribute("class","row");
		this._container.appendChild(this._divPokemons);
		document.body.appendChild(this._container);
	}
}

class Pokedex{
	constructor(paginaActual,numeroTotalDePokemons){
		this._arrayDePokemons = [];
		this._paginaActual = paginaActual
		this._numeroTotalDePokemons = numeroTotalDePokemons;
	}
}

class Pokemon{
	constructor(){
		this._nombre = nombre;
		this._urlDetalle = urlDetalle;
	}
}

class AlmacenPokemons{
	constructor(){
		this._contenedorHtml = null;
		this._pokedex = [];
		this._pokemonApiClient = null;
	}

	init(contenedorHtml, pokemonApiClient){
		this._contenedorHtml = contenedorHtml;
		this._pokemonApiClient = pokemonApiClient;
		this.pintarEstructura();
		//this.getAllSuperHeroesAndPaint();
	}

	getAllSuperHeroesAndPaint(){
		this._pokemonApiClient.getPokemonByUrl().then((data) => {
			this.paintAllPokemons(data);
		});
	}

	paintAllPokemons(){

	}


	pintarEstructura(){
		let estructura = `
			<nav class="col-md-12">
				<h1>La Pokedex Xanxa!</h1>
					<button type="button" class="col-sm-2 col-md-2 btn btn-primary">&#60; Anterior</button>
					<h4 class="col-sm-2 col-md-2">Página actual : </h4>
					<button type="button" class="col-sm-2 col-md-2 btn btn-primary">Siguiente &#62;</button>
			</nav>
			<div class="row">
				<section class="col-md-6 izq">
					<h3>Listado de Pokemons:</h3>
					<table class="table table-striped table-inverse">
					  <thead>
					    <tr>
					      <th>#</th>
					      <th>Nombre</th>
					      <th>Acciones</th>
					    </tr>
					  </thead>
					  <tbody>
					    <tr>
					      <th scope="row">1</th>
					      <td>Mark</td>
					      <td>
					      	<button type="button" class="btn btn-primary">Ver detalles</button>
					      </td>
					    </tr>
					  </tbody>
					</table>
				</section>
				<section class="col-md-6 der">
					<h3>Detalle del Pokemon:</h3>
				</section>
			</div>`;
		this._contenedorHtml.innerHTML = estructura;
	}
}

window.onload = () => {
	let mc = new MainController();
	mc.init();
}

