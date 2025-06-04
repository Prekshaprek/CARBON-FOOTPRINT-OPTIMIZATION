import React, { createContext, useState, useContext, ReactNode } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

type GeminiContextType = {
  loading: boolean;
  error: string | null;
  response: string | null;
  generateResponse: (prompt: string) => Promise<void>;
};

const GeminiContext = createContext<GeminiContextType | undefined>(undefined);

export const useGemini = () => {
  const context = useContext(GeminiContext);
  if (!context) {
    throw new Error('useGemini must be used within a GeminiProvider');
  }
  return context;
};

type GeminiProviderProps = {
  children: ReactNode;
};

export const GeminiProvider = ({ children }: GeminiProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  const generateResponse = async (prompt: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key is not configured. Please add your Gemini API key to the .env file.');
      }

      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1024,
        },
      });

      const fullPrompt = `
        As an expert in sustainable supply chain logistics, provide detailed advice and solutions to optimize carbon footprint in the following logistics scenario. 
        Focus on practical, actionable recommendations that balance environmental impact with operational efficiency.
        
        Include specific strategies, technologies, and process improvements that could reduce emissions while maintaining or improving service levels.
        
        Format your response with clear sections, bullet points for key actions, and highlight the potential carbon reduction impact where possible.
        
        USER QUERY: ${prompt}
      `;

      const result = await model.generateContent(fullPrompt);
      const text = result.response.text();
      setResponse(text);
    } catch (err) {
      console.error('Error generating response:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate response');
    } finally {
      setLoading(false);
    }
  };

  return (
    <GeminiContext.Provider value={{ loading, error, response, generateResponse }}>
      {children}
    </GeminiContext.Provider>
  );
};