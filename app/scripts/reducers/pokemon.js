const pokemon = (state = {fetching: false, fetched:false, pokemon: {}, error: null}, action) => {
  switch(action.type) {
    case 'FETCH_POKEMON': {
      return {...state, fetching: true}
      break;
    }
    case 'FETCH_POKEMON_REJECTED': {
      return {...state, fetching: false, error: action.payload}
      break;
    }
    case 'FETCH_POKEMON_FULLFILLED': {
      return {...state, fetching: false, fetched: true, pokemon: action.payload}
      break;
    }
    return state;
  }
}

export default pokemon
