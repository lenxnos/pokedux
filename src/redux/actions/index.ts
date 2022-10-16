import { AnyAction, Dispatch } from "redux";
import { getPokemonDetails } from "../../api";
import { PokemonDetailDTO, PokemonType } from "../../models/Pokemons";
import { SET_POKEMONS } from "./type";

export const setPokemons = (value: PokemonDetailDTO[]) => ({
  type: SET_POKEMONS,
  payload: value,
});

export const getPokemonsWithDetails = (pokemons: PokemonType[]) => async (dispatch: Dispatch<AnyAction>) => {
  const pokemonsDetailed = await Promise.all(pokemons.map(getPokemonDetails))
  dispatch(setPokemons(pokemonsDetailed as PokemonDetailDTO[]));
}