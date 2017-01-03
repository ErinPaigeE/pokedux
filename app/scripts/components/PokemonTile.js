import React from 'react'

const PokemonTile = ({ url, name, index}) => (
    <div className="poke-tile">
      <img src={url} className="poke-tile--image"/>
      <div className="poke-tile--poke-label">
        <span className="poke-label--text">{name}</span>
        <span className="poke-label--action">...</span>
      </div>
    </div>
)

export default PokemonTile
