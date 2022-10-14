import { connect, ConnectedProps } from "react-redux";
import { AnyAction } from "redux";
import { setPokemons } from '../actions';
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

export const mapStatePokemons = (state: PokemonState) => ({
  pokemons: state.pokemons,
});

export const mapDispatchPokemons = {
  setPokemons,
}

export const connectorPokemon = connect(mapStatePokemons, mapDispatchPokemons);

export type PropsPokemonsFromRedux = ConnectedProps<typeof connectorPokemon>