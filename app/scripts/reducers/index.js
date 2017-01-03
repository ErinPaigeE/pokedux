import { combineReducers } from 'redux'
import pokemonList from './pokemonList'
import pokemon from './pokemon'

/**
 * The state parameter is different for every reducer, and corresponds to the part of the state it manages.
 *
 */

const pokemonApp = combineReducers({
    pokemonList,
    // pokemon
})

export default pokemonApp
