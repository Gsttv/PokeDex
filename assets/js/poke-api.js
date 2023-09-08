
const pokeAi = {}

function covertPokeApiToPokeDetails(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.order
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeAi.getPokemonsDetails = (pokemon) => {
    return fetch(pokemon.url)
    .then((responde) => responde.json())
    .then(covertPokeApiToPokeDetails)

}

// metodo para retorna a lista de pokemons

pokeAi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url) // metodo para fazer a requisição
        .then((response) => response.json()) // manipulando o body para um obj json
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeAi.getPokemonsDetails))
        .then((detailRequest => Promise.all(detailRequest)))
        .then((pokemonsDetails) => pokemonsDetails)

}