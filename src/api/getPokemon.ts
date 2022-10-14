import axios from 'axios';
import { GetPokemonResponse } from '../models/Pokemons';

const POKEMON_LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getPokemon = async () => {
  try {
    const { data } = await axios.get<GetPokemonResponse>(POKEMON_LIST_URL)
    return data.results;
  } catch(err) {
    console.log(err);
  }
}