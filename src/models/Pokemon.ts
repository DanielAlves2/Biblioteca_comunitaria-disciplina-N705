export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
  sprites: {
    front_default: string;
    other?: {
      'official-artwork'?: {
        front_default?: string;
      }
    }
  };
  stats: PokemonStat[];
  abilities: PokemonAbility[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonSpecies {
  flavor_text_entries: FlavorTextEntry[];
  habitat: {
    name: string;
    url: string;
  };
  is_legendary: boolean;
  is_mythical: boolean;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language: {
    name: string;
    url: string;
  };
  version: {
    name: string;
    url: string;
  };
}

export interface TranslatedText {
  original: string;
  translated: string;
  translation: string;
}

export interface EnhancedPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: string[];
  image: string;
  stats: Record<string, number>;
  abilities: string[];
  description: string;
  habitat: string;
  is_legendary: boolean;
  is_mythical: boolean;
  translated_description?: TranslatedText;
}
