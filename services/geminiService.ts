
import { GoogleGenAI, Type } from "@google/genai";
import type { ProjectIdea } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    title: {
      type: Type.STRING,
      description: "A catchy and descriptive title for the hackathon project."
    },
    description: {
      type: Type.STRING,
      description: "A concise, one-paragraph summary of the project idea."
    },
    features: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "A key feature or functionality of the project."
      },
      description: "A list of 3 to 5 key features for the project."
    },
    techStack: {
      type: Type.ARRAY,
      items: {
        type: Type.STRING,
        description: "A technology, framework, or API suggestion."
      },
      description: "A list of recommended technologies to build the project."
    }
  },
  required: ["title", "description", "features", "techStack"],
};

export const generateProjectIdea = async (theme: string): Promise<ProjectIdea> => {
  const prompt = `
    Generate a creative and innovative hackathon project idea based on the following theme: "${theme}".
    The project should be feasible to build within a 24-48 hour timeframe.
    Provide a catchy title, a short description, 3-5 key features, and a recommended tech stack.
    Format the output as a JSON object that strictly adheres to the provided schema.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
        temperature: 0.8,
        topP: 0.95,
      },
    });

    const jsonString = response.text.trim();
    const parsedIdea: ProjectIdea = JSON.parse(jsonString);
    
    return parsedIdea;

  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    throw new Error("Failed to get a valid response from the AI model.");
  }
};
