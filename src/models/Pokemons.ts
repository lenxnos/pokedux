export type PokemonType = { 
  name: string;
  url: string;
}

export type GetPokemonResponse = {
  results: PokemonType[];
}