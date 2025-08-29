import { TranslationService } from '../src/services/translationService';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('TranslationService', () => {
  let translationService: TranslationService;

  beforeEach(() => {
    translationService = new TranslationService();
    jest.clearAllMocks();
  });

  describe('translateToShakespeare', () => {
    it('should return translated text when API call is successful', async () => {
      // Mock data
      const originalText = 'You gave Mr. Tim a hearty meal, but unfortunately what he ate made him die.';
      const translatedText = 'Thee did giveth mr. Tim a hearty meal, but unfortunately what he did doth englut did maketh him kicketh the bucket.';
      
      // Setup mock response
      mockedAxios.post.mockResolvedValueOnce({
        data: {
          success: { total: 1 },
          contents: {
            translated: translatedText,
            text: originalText,
            translation: 'shakespeare'
          }
        }
      });

      // Call the method
      const result = await translationService.translateToShakespeare(originalText);

      // Assertions
      expect(mockedAxios.post).toHaveBeenCalledWith(
        'https://api.funtranslations.com/translate/shakespeare.json',
        expect.any(URLSearchParams),
        expect.objectContaining({
          headers: expect.objectContaining({
            'Content-Type': 'application/x-www-form-urlencoded'
          })
        })
      );
      expect(result).toEqual({
        original: originalText,
        translated: translatedText,
        translation: 'shakespeare'
      });
    });

    it('should handle rate limiting gracefully', async () => {
      // Mock data
      const originalText = 'Test text';
      
      // Setup mock response for rate limit
      mockedAxios.post.mockRejectedValueOnce({
        response: { status: 429 },
        isAxiosError: true
      });

      // Call the method
      const result = await translationService.translateToShakespeare(originalText);

      // Assertions
      expect(result).toEqual({
        original: originalText,
        translated: originalText,
        translation: 'unavailable (rate limited)'
      });
    });

    it('should handle general errors gracefully', async () => {
      // Mock data
      const originalText = 'Test text';
      
      // Setup mock response for general error
      mockedAxios.post.mockRejectedValueOnce(new Error('Network error'));

      // Call the method
      const result = await translationService.translateToShakespeare(originalText);

      // Assertions
      expect(result).toEqual({
        original: originalText,
        translated: originalText,
        translation: 'failed'
      });
    });
  });

  describe('translateToYoda', () => {
    it('should return translated text when API call is successful', async () => {
      // Mock data
      const originalText = 'Master Obiwan has lost a planet.';
      const translatedText = 'Lost a planet, master obiwan has.';
      
      // Setup mock response
      mockedAxios.post.mockResolvedValueOnce({
        data: {
          success: { total: 1 },
          contents: {
            translated: translatedText,
            text: originalText,
            translation: 'yoda'
          }
        }
      });

      // Call the method
      const result = await translationService.translateToYoda(originalText);

      // Assertions
      expect(mockedAxios.post).toHaveBeenCalledWith(
        'https://api.funtranslations.com/translate/yoda.json',
        expect.any(URLSearchParams),
        expect.objectContaining({
          headers: expect.objectContaining({
            'Content-Type': 'application/x-www-form-urlencoded'
          })
        })
      );
      expect(result).toEqual({
        original: originalText,
        translated: translatedText,
        translation: 'yoda'
      });
    });
  });
});
