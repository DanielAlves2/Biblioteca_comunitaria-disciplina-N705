import axios from 'axios';
import { config } from '../utils/config';
import { Pokemon, PokemonSpecies, EnhancedPokemon } from '../models/Pokemon';

export class PokeApiService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = config.pokeApiBaseUrl;
  }

  async getPokemon(nameOrId: string | number): Promise<Pokemon> {
    try {
      const response = await axios.get<Pokemon>(`${this.baseUrl}/pokemon/${nameOrId.toString().toLowerCase()}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        throw new Error(`Pokemon ${nameOrId} not found`);
      }
      throw new Error(`Failed to fetch Pokemon: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getPokemonSpecies(nameOrId: string | number): Promise<PokemonSpecies> {
    try {
      const response = await axios.get<PokemonSpecies>(`${this.baseUrl}/pokemon-species/${nameOrId.toString().toLowerCase()}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        throw new Error(`Pokemon species ${nameOrId} not found`);
      }
      throw new Error(`Failed to fetch Pokemon species: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getEnhancedPokemon(nameOrId: string | number): Promise<EnhancedPokemon> {
    try {
      const [pokemon, species] = await Promise.all([
        this.getPokemon(nameOrId),
        this.getPokemonSpecies(nameOrId)
      ]);

      // Get English description from flavor text entries
      const englishFlavorText = species.flavor_text_entries
        .find(entry => entry.language.name === 'en')?.flavor_text || 'No description available';
      
      // Clean up description text by removing special characters and extra spaces
      const cleanDescription = englishFlavorText
        .replace(/\\f|\\n|\\r/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

      return {
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height / 10, // Convert to meters
        weight: pokemon.weight / 10, // Convert to kilograms
        types: pokemon.types.map(t => t.type.name),
        image: pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default,
        stats: pokemon.stats.reduce((acc, stat) => {
          acc[stat.stat.name] = stat.base_stat;
          return acc;
        }, {} as Record<string, number>),
        abilities: pokemon.abilities.map(a => a.ability.name),
        description: cleanDescription,
        habitat: species.habitat?.name || 'unknown',
        is_legendary: species.is_legendary,
        is_mythical: species.is_mythical
      };
    } catch (error) {
      throw new Error(`Failed to get enhanced Pokemon: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getRandomPokemon(): Promise<EnhancedPokemon> {
    try {
      // Get the count of all Pokémon
      const response = await axios.get(`${this.baseUrl}/pokemon-species?limit=0`);
      const count = response.data.count;
      
      // Generate a random ID between 1 and count
      const randomId = Math.floor(Math.random() * count) + 1;
      
      return this.getEnhancedPokemon(randomId);
    } catch (error) {
      throw new Error(`Failed to get random Pokemon: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getPokemonByType(type: string, limit: number = 10): Promise<EnhancedPokemon[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/type/${type.toLowerCase()}`);
      
      const pokemonList = response.data.pokemon.slice(0, limit);
      const enhancedPokemons: EnhancedPokemon[] = [];
      
      for (const entry of pokemonList) {
        const nameOrId = entry.pokemon.name;
        try {
          const enhancedPokemon = await this.getEnhancedPokemon(nameOrId);
          enhancedPokemons.push(enhancedPokemon);
        } catch (error) {
          console.error(`Error fetching Pokemon ${nameOrId}: ${error}`);
          // Continue with the next Pokemon if one fails
        }
      }
      
      return enhancedPokemons;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        throw new Error(`Pokemon type ${type} not found`);
      }
      throw new Error(`Failed to fetch Pokemon by type: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
