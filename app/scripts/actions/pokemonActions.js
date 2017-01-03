import axios from 'axios';

const formatPokemonList = (pokemonList) => {
  return pokemonList.map((pokemon) => {
    let split = pokemon.url.split('/')
    // if url is http://something.org/pokemon/151/ we want the number in between the last two slashes
    let index = split[split.length - 2]
    return Object.assign(pokemon, {index: index})
  })
}

export function fetchPokemonList() {
  return function(dispatch) {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then((response) => {
        console.log("pokemons", response)

        dispatch({type: "FETCH_POKEMON_LIST_FULLFILLED", payload: formatPokemonList(response.data.results)})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POKEMON_LIST_REJECTED", payload: err})
      })
  }
}
