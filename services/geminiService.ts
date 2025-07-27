import { GoogleGenAI } from "@google/genai";

// Ensure the API key is available in the environment variables
const apiKey = process.env.API_KEY;
if (!apiKey) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey });

export const callGemini = async (prompt: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ parts: [{ text: prompt }] }],
            config: {
                // To prioritize faster responses for an interactive UI
                thinkingConfig: { thinkingBudget: 0 }
            }
        });

        return response.text || 'No se recibió respuesta de la IA';
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            return `Ocurrió un error al conectar con la IA: ${error.message}`;
        }
        return "Ocurrió un error desconocido al conectar con la IA.";
    }
};