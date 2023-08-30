
const pokeAi = {}

// metodo para retorna a lista de pokemons

pokeAi.getPokemons = (offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    return fetch(url) // metodo para fazer a requisição
        .then((response) => response.json()) // manipulando o body para um obj json
        .then((jsonBody) => jsonBody.results)
        .catch((error) => {console.error(error)})
}