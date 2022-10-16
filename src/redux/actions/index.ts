import { PokemonDetailDTO } from "../../models/Pokemons";
import { SET_POKEMONS } from "./type";

export const setPokemons = (value: PokemonDetailDTO[]) => ({
  type: SET_POKEMONS,
  payload: value,
}) 