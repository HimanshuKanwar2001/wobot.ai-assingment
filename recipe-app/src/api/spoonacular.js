import axios from "axios";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;


console.log(API_KEY);
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: { apiKey: API_KEY, number: 100 }, // Fetch 10 recipes
    });
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    throw new Error("Failed to fetch recipes.");
  }
};

export const fetchRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}/information`, {
      params: { apiKey: API_KEY },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch recipe details.");
  }
};
