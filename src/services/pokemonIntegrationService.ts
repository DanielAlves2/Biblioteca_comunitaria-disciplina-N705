import { PokeApiService } from './pokeApiService';
import { TranslationService } from './translationService';
import { EnhancedPokemon } from '../models/Pokemon';

export class PokemonIntegrationService {
  private pokeApiService: PokeApiService;
  private translationService: TranslationService;

  constructor() {
    this.pokeApiService = new PokeApiService();
    this.translationService = new TranslationService();
  }

  async getPokemonWithTranslation(nameOrId: string | number, translator: 'shakespeare' | 'yoda' | 'portuguese' = 'shakespeare'): Promise<EnhancedPokemon> {
    try {
      const pokemon = await this.pokeApiService.getEnhancedPokemon(nameOrId);
      
      // Translate the description based on the translator type
      let translatedDescription;
      
      switch (translator) {
        case 'shakespeare':
          translatedDescription = await this.translationService.translateToShakespeare(pokemon.description);
          break;
        case 'yoda':
          translatedDescription = await this.translationService.translateToYoda(pokemon.description);
          break;
        case 'portuguese':
          translatedDescription = await this.translationService.translateToPortuguese(pokemon.description);
          break;
        default:
          translatedDescription = await this.translationService.translateToShakespeare(pokemon.description);
      }
      
      return {
        ...pokemon,
        translated_description: translatedDescription
      };
    } catch (error) {
      throw new Error(`Failed to get Pokemon with translation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getRandomPokemonWithTranslation(translator: 'shakespeare' | 'yoda' | 'portuguese' = 'shakespeare'): Promise<EnhancedPokemon> {
    try {
      const pokemon = await this.pokeApiService.getRandomPokemon();
      
      // Translate the description based on the translator type
      let translatedDescription;
      
      switch (translator) {
        case 'shakespeare':
          translatedDescription = await this.translationService.translateToShakespeare(pokemon.description);
          break;
        case 'yoda':
          translatedDescription = await this.translationService.translateToYoda(pokemon.description);
          break;
        case 'portuguese':
          translatedDescription = await this.translationService.translateToPortuguese(pokemon.description);
          break;
        default:
          translatedDescription = await this.translationService.translateToShakespeare(pokemon.description);
      }
      
      return {
        ...pokemon,
        translated_description: translatedDescription
      };
    } catch (error) {
      throw new Error(`Failed to get random Pokemon with translation: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async getLegendaryPokemonWithTranslation(limit: number = 5): Promise<EnhancedPokemon[]> {
    try {
      // First get some legendary Pokémon
      const response = await fetch(`${this.pokeApiService['baseUrl']}/pokemon-species?limit=1000`);
      const data = await response.json();
      
      const legendaryPromises = [];
      let count = 0;
      
      // Filter for legendary Pokémon
      for (const entry of data.results) {
        if (count >= limit) break;
        
        const speciesUrl = entry.url;
        const speciesResponse = await fetch(speciesUrl);
        const speciesData = await speciesResponse.json();
        
        if (speciesData.is_legendary) {
          legendaryPromises.push(this.getPokemonWithTranslation(entry.name, 'yoda'));
          count++;
        }
      }
      
      return Promise.all(legendaryPromises);
    } catch (error) {
      throw new Error(`Failed to get legendary Pokemon: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  async comparePokemonByType(type: string, limit: number = 5): Promise<{
    type: string;
    count: number;
    averageStats: Record<string, number>;
    pokemons: EnhancedPokemon[];
  }> {
    try {
      const pokemons = await this.pokeApiService.getPokemonByType(type, limit);
      
      // Calculate average stats
      const statsSum: Record<string, number> = {};
      let statsCount: Record<string, number> = {};
      
      pokemons.forEach(pokemon => {
        Object.entries(pokemon.stats).forEach(([stat, value]) => {
          if (!statsSum[stat]) {
            statsSum[stat] = 0;
            statsCount[stat] = 0;
          }
          statsSum[stat] += value;
          statsCount[stat]++;
        });
      });
      
      const averageStats: Record<string, number> = {};
      Object.entries(statsSum).forEach(([stat, sum]) => {
        averageStats[stat] = Math.round(sum / statsCount[stat]);
      });
      
      return {
        type,
        count: pokemons.length,
        averageStats,
        pokemons
      };
    } catch (error) {
      throw new Error(`Failed to compare Pokemon by type: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}
