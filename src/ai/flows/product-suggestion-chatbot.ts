'use server';

/**
 * @fileOverview An AI chatbot to suggest products based on customer needs.
 *
 * - productSuggestionChatbot - A function that handles the product suggestion process.
 * - ProductSuggestionChatbotInput - The input type for the productSuggestionChatbot function.
 * - ProductSuggestionChatbotOutput - The return type for the productSuggestionChatbot function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProductSuggestionChatbotInputSchema = z.object({
  query: z.string().describe('The customer query for product suggestions.'),
});
export type ProductSuggestionChatbotInput = z.infer<typeof ProductSuggestionChatbotInputSchema>;

const ProductSuggestionChatbotOutputSchema = z.object({
  suggestions: z.string().describe('Product suggestions based on the customer query.'),
});
export type ProductSuggestionChatbotOutput = z.infer<typeof ProductSuggestionChatbotOutputSchema>;

export async function productSuggestionChatbot(input: ProductSuggestionChatbotInput): Promise<ProductSuggestionChatbotOutput> {
  return productSuggestionChatbotFlow(input);
}

const prompt = ai.definePrompt({
  name: 'productSuggestionChatbotPrompt',
  input: {schema: ProductSuggestionChatbotInputSchema},
  output: {schema: ProductSuggestionChatbotOutputSchema},
  prompt: `You are a chatbot assistant for Ronel's Bikes Online. Your job is to provide product suggestions based on customer queries.

Customer Query: {{{query}}}

Suggestions:`, 
});

const productSuggestionChatbotFlow = ai.defineFlow(
  {
    name: 'productSuggestionChatbotFlow',
    inputSchema: ProductSuggestionChatbotInputSchema,
    outputSchema: ProductSuggestionChatbotOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
