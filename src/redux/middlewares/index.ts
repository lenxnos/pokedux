import { Middleware } from "redux";
import { PokemonState } from "../reducers/pokemons";

export const logger: Middleware<{}, PokemonState> = (storeApi) => (next) => (action) => {
  console.log(action);
  next(action);
}

export const featuring: Middleware<{}, PokemonState> = (storeApi) => (next) => (action) => {
  const featured = [{ name: 'eddie', url: 'asasasa' }, ...action.payload];
  const updateActionInfo = { ...action, payload: featured } 
  next(updateActionInfo);
}