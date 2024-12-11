import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchRecipeDetails } from '../api/spoonacular';

const RecipeDetailsPage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadRecipeDetails = async () => {
      try {
        const data = await fetchRecipeDetails(id);
        setRecipe(data);
      } catch (err) {
        setError(err.message);
      }
    };
    loadRecipeDetails();
  }, [id]);

  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!recipe) return <div className="text-center">Loading...</div>;

  return (
    <div className="container mx-auto py-8">
      <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="mt-6 rounded-lg shadow-md" />
      <h2 className="text-2xl font-semibold mt-8">Ingredients</h2>
      <ul className="list-disc list-inside">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-semibold mt-8">Instructions</h2>
      <p className="mt-4">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetailsPage;
