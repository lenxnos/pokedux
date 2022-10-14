import { FC } from 'react'
import PokemonCard from '../PokemonCard';
import './style.css'

interface Props {
  pokemons: any[],
}

const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <div className="PokemonList">
      {pokemons.map((pokemon) => (
        <PokemonCard />
      ))}
    </div>
  )
}

export default PokemonList;
