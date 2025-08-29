import { Request, Response } from 'express';
import { PokemonIntegrationService } from '../services/pokemonIntegrationService';
import { PokeApiService } from '../services/pokeApiService';

export class PokemonController {
  private pokemonIntegrationService: PokemonIntegrationService;
  private pokeApiService: PokeApiService;

  constructor() {
    this.pokemonIntegrationService = new PokemonIntegrationService();
    this.pokeApiService = new PokeApiService();
  }

  getPokemon = async (req: Request, res: Response): Promise<void> => {
    try {
      const { nameOrId } = req.params;
      
      if (!nameOrId) {
        res.status(400).json({ error: 'Pokemon name or ID is required' });
        return;
      }

      const pokemon = await this.pokeApiService.getEnhancedPokemon(nameOrId);
      res.json(pokemon);
    } catch (error) {
      res.status(404).json({ 
        error: error instanceof Error ? error.message : 'Failed to get Pokemon'
      });
    }
  };

  getRandomPokemon = async (_req: Request, res: Response): Promise<void> => {
    try {
      const pokemon = await this.pokeApiService.getRandomPokemon();
      res.json(pokemon);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get random Pokemon'
      });
    }
  };

  getPokemonWithTranslation = async (req: Request, res: Response): Promise<void> => {
    try {
      const { nameOrId } = req.params;
      const { translator = 'yoda' } = req.query;
      
      if (!nameOrId) {
        res.status(400).json({ error: 'Pokemon name or ID is required' });
        return;
      }

      // Validate translator option
      let validTranslator: 'shakespeare' | 'yoda' | 'portuguese' = 'shakespeare';
      
      if (translator === 'yoda') {
        validTranslator = 'yoda';
      } else if (translator === 'portuguese') {
        validTranslator = 'portuguese';
      }
      
      const pokemon = await this.pokemonIntegrationService.getPokemonWithTranslation(nameOrId, validTranslator);
      res.json(pokemon);
    } catch (error) {
      res.status(404).json({ 
        error: error instanceof Error ? error.message : 'Failed to get Pokemon with translation'
      });
    }
  };

  getRandomPokemonWithTranslation = async (req: Request, res: Response): Promise<void> => {
    try {
      const { translator = 'shakespeare' } = req.query;
      
      // Validate translator option
      let validTranslator: 'shakespeare' | 'yoda' | 'portuguese' = 'shakespeare';
      
      if (translator === 'yoda') {
        validTranslator = 'yoda';
      } else if (translator === 'portuguese') {
        validTranslator = 'portuguese';
      }
      
      const pokemon = await this.pokemonIntegrationService.getRandomPokemonWithTranslation(validTranslator);
      res.json(pokemon);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get random Pokemon with translation'
      });
    }
  };

  getLegendaryPokemonWithTranslation = async (req: Request, res: Response): Promise<void> => {
    try {
      const { limit = '5' } = req.query;
      const parsedLimit = parseInt(limit as string, 10) || 5;
      
      const legendaryPokemons = await this.pokemonIntegrationService.getLegendaryPokemonWithTranslation(parsedLimit);
      res.json(legendaryPokemons);
    } catch (error) {
      res.status(500).json({ 
        error: error instanceof Error ? error.message : 'Failed to get legendary Pokemon'
      });
    }
  };

  comparePokemonByType = async (req: Request, res: Response): Promise<void> => {
    try {
      const { type } = req.params;
      const { limit = '5' } = req.query;
      const parsedLimit = parseInt(limit as string, 10) || 5;
      
      if (!type) {
        res.status(400).json({ error: 'Pokemon type is required' });
        return;
      }

      const comparison = await this.pokemonIntegrationService.comparePokemonByType(type, parsedLimit);
      res.json(comparison);
    } catch (error) {
      res.status(404).json({ 
        error: error instanceof Error ? error.message : 'Failed to compare Pokemon by type'
      });
    }
  };
}
