import { FC } from 'react'
import { PokemonStore } from '../../models/Pokemons';
import PokemonCard from '../PokemonCard';
import './style.css'

interface Props {
  pokemons: PokemonStore[],
}

const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          image={pokemon.sprites.front_default}
        />
      ))}
    </div>
  )
}

export default PokemonList;
