import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const API_KEY = 'ee8ba18a80ea457ebe7b699636d79059';

  const searchRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&cuisine=${cuisine}&number=5&offset=${
        (currentPage - 1) * 5
      }&apiKey=${API_KEY}`
    );
    const data = await response.json();
    setRecipes(data.results);
  };

  useEffect(() => {
    if (searchTerm) {
      searchRecipes();
    }
  }, [searchTerm, cuisine, currentPage]);

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a recipe..."
      />
      <select value={cuisine} onChange={(e) => setCuisine(e.target.value)}>
        <option value="">All</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        {/* Add more cuisines */}
      </select>
      <button onClick={searchRecipes}>Search</button>

      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} />
            </Link>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Home;