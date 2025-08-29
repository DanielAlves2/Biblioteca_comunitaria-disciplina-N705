import { PokeApiService } from '../src/services/pokeApiService';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('PokeApiService', () => {
  let pokeApiService: PokeApiService;

  beforeEach(() => {
    pokeApiService = new PokeApiService();
    jest.clearAllMocks();
  });

  describe('getPokemon', () => {
    it('should return pokemon data when API call is successful', async () => {
      // Mock data
      const mockPokemonData = {
        id: 25,
        name: 'pikachu',
        height: 40,
        weight: 60,
        types: [{ slot: 1, type: { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' } }],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          other: {
            'official-artwork': {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
            }
          }
        },
        stats: [
          {
            base_stat: 35,
            effort: 0,
            stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' }
          }
        ],
        abilities: [
          {
            ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
            is_hidden: false,
            slot: 1
          }
        ]
      };

      // Setup mock response
      mockedAxios.get.mockResolvedValueOnce({ data: mockPokemonData });

      // Call the method
      const result = await pokeApiService.getPokemon('pikachu');

      // Assertions
      expect(mockedAxios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/pikachu');
      expect(result).toEqual(mockPokemonData);
    });

    it('should throw an error when pokemon is not found', async () => {
      // Setup mock response for 404
      mockedAxios.get.mockRejectedValueOnce({
        response: { status: 404 },
        isAxiosError: true
      });

      // Assertions
      await expect(pokeApiService.getPokemon('nonexistent')).rejects.toThrow('Pokemon nonexistent not found');
    });

    it('should throw an error when API call fails', async () => {
      // Setup mock response for general error
      mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

      // Assertions
      await expect(pokeApiService.getPokemon('pikachu')).rejects.toThrow('Failed to fetch Pokemon: Network error');
    });
  });

  describe('getEnhancedPokemon', () => {
    it('should return enhanced pokemon data when API calls are successful', async () => {
      // Mock data
      const mockPokemonData = {
        id: 25,
        name: 'pikachu',
        height: 40,
        weight: 60,
        types: [{ slot: 1, type: { name: 'electric', url: 'https://pokeapi.co/api/v2/type/13/' } }],
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          other: {
            'official-artwork': {
              front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
            }
          }
        },
        stats: [
          {
            base_stat: 35,
            effort: 0,
            stat: { name: 'hp', url: 'https://pokeapi.co/api/v2/stat/1/' }
          }
        ],
        abilities: [
          {
            ability: { name: 'static', url: 'https://pokeapi.co/api/v2/ability/9/' },
            is_hidden: false,
            slot: 1
          }
        ]
      };

      const mockSpeciesData = {
        flavor_text_entries: [
          {
            flavor_text: 'When several of\\nthese POKéMON\\ngather, their\\nelectricity can\\nbuild and cause\\nlightning storms.',
            language: { name: 'en', url: 'https://pokeapi.co/api/v2/language/9/' },
            version: { name: 'red', url: 'https://pokeapi.co/api/v2/version/1/' }
          }
        ],
        habitat: { name: 'forest', url: 'https://pokeapi.co/api/v2/pokemon-habitat/2/' },
        is_legendary: false,
        is_mythical: false
      };

      // Spy on the methods
      jest.spyOn(pokeApiService, 'getPokemon').mockResolvedValueOnce(mockPokemonData);
      jest.spyOn(pokeApiService, 'getPokemonSpecies').mockResolvedValueOnce(mockSpeciesData);

      // Call the method
      const result = await pokeApiService.getEnhancedPokemon('pikachu');

      // Assertions
      expect(pokeApiService.getPokemon).toHaveBeenCalledWith('pikachu');
      expect(pokeApiService.getPokemonSpecies).toHaveBeenCalledWith('pikachu');
      expect(result).toEqual({
        id: 25,
        name: 'pikachu',
        height: 4,
        weight: 6,
        types: ['electric'],
        image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
        stats: { hp: 35 },
        abilities: ['static'],
        description: 'When several of these POKéMON gather, their electricity can build and cause lightning storms.',
        habitat: 'forest',
        is_legendary: false,
        is_mythical: false
      });
    });
  });
});
