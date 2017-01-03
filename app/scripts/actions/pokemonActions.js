import axios from 'axios';

export function fetchPokemonList() {
  return function(dispatch) {
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151')
      .then((response) => {
        console.log("pokemons", response)
        dispatch({type: "FETCH_POKEMON_LIST_FULLFILLED", payload: response.data.results})
      })
      .catch((err) => {
        dispatch({type: "FETCH_POKEMON_LIST_REJECTED", payload: err})
      })
  }
}
