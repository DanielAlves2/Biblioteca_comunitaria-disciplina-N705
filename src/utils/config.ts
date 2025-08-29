import dotenv from 'dotenv';

dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  pokeApiBaseUrl: process.env.POKE_API_BASE_URL || 'https://pokeapi.co/api/v2',
  pokeTranslatorApiBaseUrl: process.env.POKE_TRANSLATOR_API_BASE_URL || 'https://api.funtranslations.com/translate'
};
