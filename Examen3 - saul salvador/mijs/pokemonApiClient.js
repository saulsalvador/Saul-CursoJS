class PokemonApiClient{
	constructor(apiClient){
		this._baseUrl = "http://pokeapi.co/api/v2/pokemon";
		this._apiClient= apiClient;
	}

	getPokemonsAtPage(numeroPagina){

	}

	getPokemonByUrl(urlDePokemon){
		let completeUrl = this._baseUrl;
		let promise = this._apiClient.get(completeUrl,null);

		let anotherPromise = promise.then((data) => {

			let pokemons = [];
			
			for(let i = 0 ; i<data.length;i++){
				let elemento = data[i];		
				//mapeo de datos
				let pokemon = new Pokemon(
					elemento.name
					);
				pokemons.push(pokemon);
			}

			return pokemons;
		});

		return anotherPromise;
	}

}
