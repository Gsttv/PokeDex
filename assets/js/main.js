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

pokeAi.getPokemons.then((pokemon) => {

    const listItens = []
    
    for (let i = 0; i < pokemon.length; i++) {  // pecorrendo a lista e adcionadno cada elemento ao LI do HTML 
        const pokemons = pokemon[i];
        listItens.push(convertPokemonListToHtml(pokemons))
        

    }
})
    .catch((erro) => console.error(erro))

