'use server';

import { productSuggestionChatbot } from '@/ai/flows/product-suggestion-chatbot';

export async function askChatbot(query: string): Promise<string> {
  if (!query) {
    return 'Please provide a query.';
  }

  try {
    const result = await productSuggestionChatbot({ query });
    return result.suggestions;
  } catch (error) {
    console.error('Error in chatbot flow:', error);
    return 'An error occurred while processing your request.';
  }
}
