const pokemonList = (state = {fetching: false, fetched:false, pokemonList: [], error: null}, action) => {
  switch(action.type) {
    case 'FETCH_POKEMON_LIST': {
      return {...state, fetching: true}
      break;
    }
    case 'FETCH_POKEMON_LIST_REJECTED': {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case 'FETCH_POKEMON_LIST_FULLFILLED': {
      return {...state, fetching: false, fetched: true, pokemonList: action.payload}
      break;
    }
  }
  return state;
}

export default pokemonList
