const pokemonList = document.getElementById('pokemonList')
const loadMorerButton = document.getElementById('more')
const maxRecords = 151
const limit = 10
let offset = 0

function convertPokemonListToHtml(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
                <span class="number">${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt=${pokemon.name} class="PokemonImg">
                </div>
                
        </li>
    
    `
}



function loadMoreItens(offset, limit) {
    pokeAi.getPokemons(offset, limit).then((pokemons = []) => {

        pokemonList.innerHTML += pokemons.map(convertPokemonListToHtml).join('')

    })

}

loadMoreItens(offset, limit)

loadMorerButton.addEventListener("click", () => {
    offset += limit
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadMoreItens(offset, newLimit)

        loadMorerButton.parentElement.removeChild(loadMorerButton)
    } else {
        loadMoreItens(offset, limit)
    }

})
