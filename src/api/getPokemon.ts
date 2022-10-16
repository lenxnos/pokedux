import axios from 'axios';
import { PokemonDetailDTO, GetPokemonResponse, PokemonType } from '../models/Pokemons';

const POKEMON_LIST_URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

export const getPokemon = async () => {
  try {
    const { data } = await axios.get<GetPokemonResponse>(POKEMON_LIST_URL)
    return data.results;
  } catch(err) {
    console.log(err);
  }
}

export const getPokemonDetails = async (pokemon: PokemonType) => {
  try {
    const { data } = await axios.get<PokemonDetailDTO>(pokemon.url);
    return data;
  } catch (error) {
    console.log(error);
  }
}