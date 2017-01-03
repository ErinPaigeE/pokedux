import React, {Component, PropTypes} from 'react'
import {fetchPokemonList} from '../actions/pokemonActions'
import { connect } from 'react-redux'

import PokemonTile from '../components/PokemonTile'

// import PokemonList from '../components/PokemonList'

class PokemonListContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this)
    const { dispatch } = this.props;
    dispatch(fetchPokemonList())
  }

  getImage(index) {
    return require('../../assets/images/' + index + ".png")
  }

  render() {
    const {pokemonList, fetching, fetched, error} = this.props
    return (<div className="pokemon-list-container">
              {pokemonList.length ?
                <ul className="pokemon-list">
                  {pokemonList.map((pokemon, index) => {
                    this.getImage(pokemon.index)
                    var src = require('../../assets/images/' + pokemon.index + '.png')
                    return <li key={index}><PokemonTile url={src} name={pokemon.name} index={pokemon.index}/></li>
                  })}
                </ul>
                 : null
               }
            </div>)
  }
}

PokemonListContainer.propTypes = {
    pokemonList: PropTypes.array.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    error: PropTypes.object,
}

const mapStateToProps = (state, ownProps) => {
    return {
        pokemonList: state.pokemonList.pokemonList,
        fetching: state.pokemonList.fetching,
        fetched: state.pokemonList.fetched,
        error: state.pokemonList.error
    }
}

export default connect(mapStateToProps)(PokemonListContainer)
