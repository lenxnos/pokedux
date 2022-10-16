import { AnyAction } from "redux";
import { PokemonStore } from "../../models/Pokemons";
import { SET_FAVORITE, SET_POKEMONS } from "../actions/type"
import { fromJS, setIn, get, getIn, Map } from 'immutable';
import { shallowEqual } from "react-redux";

export interface PokemonState {
  pokemons: PokemonStore[],
}

type PokemonState2 = Map<{ pokemons: PokemonStore[] }, any>;

const initialState = fromJS({
  pokemons: [],
 })

export const pokemonsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_POKEMONS:
      // return  { ...state, pokemons: action.payload }
      // state.setIn(['pokemons'], fromJS(action.payload))
      return setIn(state, ['pokemons'], fromJS(action.payload));
    case SET_FAVORITE:
      const currentPokemonIndex = get(state, 'pokemons').findIndex(((pokemon) => pokemon.get('name') === action.payload));
      if (currentPokemonIndex < 0) return state;
      // newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite;
      // return { ...state, pokemons: newPokemonList }
      const isFavorite = getIn(state, ['pokemons', currentPokemonIndex, 'favorite']);
      return setIn(state, ['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);

    default: 
      return state;
  }
}

export const selectPokemons = (state: any): PokemonStore[] =>
  state.getIn(state, ['data', 'pokemons'], shallowEqual).toJS();