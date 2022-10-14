import { AnyAction } from "redux";
import { SET_POKEMONS } from "../actions/type"

interface PokemonState {
  pokemons: []
}

const initialState: PokemonState = {
  pokemons: []
}

export const pokemonsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_POKEMONS:
      return  { ...state, pokemons: action.payload }
    default: 
      return state;
  }
}

export const selectPokemons = (state: PokemonState) => state.pokemons;