import React, {Component, PropTypes} from 'react'
import {fetchPokemonList} from '../actions/pokemonActions'
import { connect } from 'react-redux'

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
    return (<div>
              <span>pokemons!</span>
              {pokemonList.length ?
                <ul>
                  {pokemonList.map((pokemon, index) => {
                    this.getImage(pokemon.index)
                    var src = require('../../assets/images/' + pokemon.index + '.png')
                    return <li key={index}><img src={src}></img></li>
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
