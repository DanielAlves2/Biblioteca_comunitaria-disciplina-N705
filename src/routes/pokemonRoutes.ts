import { Router } from 'express';
import { PokemonController } from '../controllers/pokemonController';

const router = Router();
const pokemonController = new PokemonController();

/**
 * @route GET /api/pokemon/random
 * @desc Get a random Pokemon
 */
router.get('/random', pokemonController.getRandomPokemon);

/**
 * @route GET /api/pokemon/translate/:nameOrId
 * @desc Get a Pokemon with translated description (shakespeare, yoda, or portuguese)
 * @query translator - 'shakespeare' (default), 'yoda', or 'portuguese'
 */
router.get('/translate/:nameOrId', pokemonController.getPokemonWithTranslation);

/**
 * @route GET /api/pokemon/random/translate
 * @desc Get a random Pokemon with translated description
 * @query translator - 'shakespeare' (default), 'yoda', or 'portuguese'
 */
router.get('/random/translate', pokemonController.getRandomPokemonWithTranslation);

/**
 * @route GET /api/pokemon/legendary
 * @desc Get legendary Pokemon with Yoda translations
 * @query limit - Number of legendary Pokemon to return (default: 5)
 */
router.get('/legendary/pokemon', pokemonController.getLegendaryPokemonWithTranslation);

/**
 * @route GET /api/pokemon/compare/type/:type
 * @desc Compare Pokemon of a specific type
 * @param type - The Pokemon type to compare
 * @query limit - Number of Pokemon to include (default: 5)
 */
router.get('/compare/type/:type', pokemonController.comparePokemonByType);

/**
 * @route GET /api/pokemon/:nameOrId
 * @desc Get detailed information about a specific Pokemon
 */
router.get('/:nameOrId', pokemonController.getPokemon);

export default router;
