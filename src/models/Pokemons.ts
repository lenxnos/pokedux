export type PokemonStore = {
  name: string;
  sprites: SpritesType 
}

export type PokemonType = { 
  name: string;
  url: string;
}

export type GetPokemonResponse = {
  results: PokemonType[];
}

export type SpritesType = {
  back_default: string;
  back_female: string | null;
  back_shiny: string;
  back_shiny_female: string | null;
  front_default: string;
  front_female: string | null;
  front_shiny: string;
  front_shiny_female: string | null;
}

export interface PokemonDetailDTO {
  name: string;
  sprites: SpritesType
}