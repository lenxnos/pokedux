import { AnyAction, Dispatch } from "redux";
import { getPokemonDetails } from "../../api";
import { PokemonDetailDTO, Pokemon, PokemonStore } from "../../models/Pokemons";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./type";

export const setPokemons = (value: PokemonStore[]) => ({
  type: SET_POKEMONS,
  payload: value,
});

export const setLoading = (value: boolean) => ({
  type: SET_LOADING,
  payload: value,
})

export const setFavorite = (value: string) => ({
  type: SET_FAVORITE,
  payload: value,
})

export const getPokemonsWithDetails = (pokemons: Pokemon[]) => async (dispatch: Dispatch<AnyAction>) => {
  const pokemonsDetailed = await Promise.all(pokemons.map(getPokemonDetails)) as PokemonDetailDTO[];

  const pokemonsAdapter = pokemonsDetailed.map(({ name, types, sprites }) => ({
    name,
    types: types.map(({ type }) => type),
    sprites,
  }))
  dispatch(setPokemons(pokemonsAdapter as PokemonStore[]));
}
