export type PokemonType = {
  name: string;
  url: string;
}

export type PokemonStore = {
  name: string;
  sprites: SpritesType,
  types: PokemonType[],
  favorite: boolean;
}

export type Pokemon = { 
  name: string;
  url: string;
}

export type GetPokemonResponse = {
  results: Pokemon[];
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
  types: {
    slot: number,
    type: PokemonType,
  }[]
}