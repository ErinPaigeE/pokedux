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

  render() {
    const {pokemonList, fetching, fetched, error} = this.props
    return (<div>
              <span>pokemons!</span>
              {pokemonList.length ? <span>we got pokemon</span> : null }
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
