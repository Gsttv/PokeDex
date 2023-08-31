
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

pokeAi.getPokemons().then((pokemons = []) => {

    pokemonList.innerHTML += pokemons.map(convertPokemonListToHtml).join('')
    

    // OS CODIGOS COMENTADO ABAIXO FAZEM A MSM COISA QUE A LINHA ACIMA

    /* const newList = pokemons.map(convertPokemonListToHtml)
       const newList = pokemons.map((pokemon) => convertPokemonListToHtml(pokemon)) // função que converte a lista em formato de json para html
       const newHtml = newList.join('')
       pokemonList.innerHTML += newHtml
    */

    /* for (let i = 0; i < pokemon.length; i++) {  // pecorrendo a lista e adcionadno cada elemento ao LI do HTML 
         const pokemons = pokemon[i];
         listItens.push(convertPokemonListToHtml(pokemons))
     } */
})


