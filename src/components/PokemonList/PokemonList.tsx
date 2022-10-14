import { FC } from 'react'
import { PokemonType } from '../../models/Pokemons';
import PokemonCard from '../PokemonCard';
import './style.css'

interface Props {
  pokemons: PokemonType[],
}

const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
        />
      ))}
    </div>
  )
}

export default PokemonList;
