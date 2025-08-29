import axios from 'axios';
import { config } from '../utils/config';
import { TranslatedText } from '../models/Pokemon';

export class TranslationService {
  private baseUrl: string;

  constructor() {
    this.baseUrl = config.pokeTranslatorApiBaseUrl;
  }

  async translateToShakespeare(text: string): Promise<TranslatedText> {
    return this.translate(text, 'shakespeare');
  }

  async translateToYoda(text: string): Promise<TranslatedText> {
    return this.translate(text, 'yoda');
  }
  
  async translateToPortuguese(text: string): Promise<TranslatedText> {
    try {
      // Usando Google Translate API (não oficial)
      const response = await axios.get('https://translate.googleapis.com/translate_a/single', {
        params: {
          client: 'gtx',
          sl: 'en',
          tl: 'pt',
          dt: 't',
          q: text
        }
      });
      
      // A resposta vem em um formato específico, extraímos a tradução
      const translatedText = response.data[0][0][0];
      
      return {
        original: text,
        translated: translatedText,
        translation: 'portuguese'
      };
    } catch (error) {
      console.error(`Portuguese translation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return {
        original: text,
        translated: text,
        translation: 'portuguese-failed'
      };
    }
  }

  private async translate(text: string, translator: string): Promise<TranslatedText> {
    try {
      const response = await axios.post(`${this.baseUrl}/${translator}.json`, 
        new URLSearchParams({
          text: text
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      
      return {
        original: text,
        translated: response.data.contents.translated,
        translation: translator
      };
    } catch (error) {
      // The API has rate limits, so we'll handle that gracefully
      if (axios.isAxiosError(error) && error.response?.status === 429) {
        console.warn('Translation API rate limit reached');
        return {
          original: text,
          translated: text,
          translation: 'unavailable (rate limited)'
        };
      }
      
      console.error(`Translation error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      return {
        original: text,
        translated: text,
        translation: 'failed'
      };
    }
  }
}
