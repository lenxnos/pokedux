import { PokemonType } from "../../models/Pokemons";
import { SET_POKEMONS } from "./type";

export const setPokemons = (value: PokemonType[]) => ({
  type: SET_POKEMONS,
  payload: value,
}) 