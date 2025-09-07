import { GoogleGenAI, Type } from "@google/genai";
import { type SeriesData } from "../types";

// Lazily initialize to prevent app crash on load if API key isn't immediately available.
let ai: GoogleGenAI | null = null;

const getAi = () => {
    if (!ai) {
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    }
    return ai;
};

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        characters: {
            type: Type.ARRAY,
            description: "A list of 5 to 8 key characters from the series.",
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING, description: "The character's full name." },
                    description: { type: Type.STRING, description: "A brief, one-paragraph description of the character's role and personality." },
                },
                required: ["name", "description"]
            }
        },
        movies: {
            type: Type.ARRAY,
            description: "A list of all major movies in the series, if any.",
            items: {
                type: Type.OBJECT,
                properties: {
                    title: { type: Type.STRING, description: "The movie's official title." },
                    description: { type: Type.STRING, description: "A brief, one-paragraph synopsis of the movie's plot." },
                },
                required: ["title", "description"]
            }
        },
        tvShows: {
            type: Type.ARRAY,
            description: "A list of all major TV shows in the series, if any.",
            items: {
                type: Type.OBJECT,
                properties: {
                    title: { type: Type.STRING, description: "The TV show's official title." },
                    description: { type: Type.STRING, description: "A brief, one-paragraph synopsis of the TV show's premise." },
                },
                required: ["title", "description"]
            }
        }
    },
    required: ["characters", "movies", "tvShows"]
};


export const fetchSeriesData = async (seriesName: string): Promise<SeriesData> => {
    try {
        const prompt = `
        Generate an infographic-style summary for the series: "${seriesName}".
        Provide a list of 5-8 key characters, all major movies (if any), and all major TV shows (if any) related to the main canon.
        For each item, provide a concise, one-paragraph description suitable for an infographic.
        Ensure the data is structured according to the provided JSON schema. If a category like 'movies' or 'tvShows' is not applicable (e.g., for a standalone TV show like 'Friends'), return an empty array for that category.
        `;
        
        const response = await getAi().models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
                temperature: 0.5,
            },
        });

        const jsonText = response.text.trim();
        const parsedData = JSON.parse(jsonText);
        
        return parsedData as SeriesData;

    } catch (error) {
        console.error(`Error fetching data for ${seriesName}:`, error);
        throw new Error(`Could not generate data from Gemini API for ${seriesName}.`);
    }
};