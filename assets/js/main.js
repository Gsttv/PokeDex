
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonListToHtml(pokemon) {
    return `
        <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="images/001Bulbasaur.webp" alt=${pokemon.name} class="PokemonImg">
                </div>
                
        </li>
    
    `
}

const pokemonList = document.getElementById('pokemonList')

fetch(url) // metodo para fazer a requisição
    .then((response) => response.json()) // manipulando o body para um obj json
    .then((jsonBody) => jsonBody.results)
    .then((pokemon) => {   // Lista dos pokemons 

        for (let i = 0; i < pokemon.length; i++) {  // pecorrendo a lista e adcionadno cada elemento ao LI do HTML 
            const pokemons = pokemon[i];
            pokemonList.innerHTML += convertPokemonListToHtml(pokemons) // obtém a sintaxe HTML e incrementa com o pokemon obtido
            
            
        }
    })   
    .catch((erro) => console.log(erro))

