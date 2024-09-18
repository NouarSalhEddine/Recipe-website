import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Text,
  Input,
  Button,
  Select,
  SimpleGrid,
  Image,
  Heading,
} from '@chakra-ui/react';
import Pagination from '../shared/pagination';

const HomePizzaSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [cuisine, setCuisine] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const API_KEY = '98634d9dfad84dc7b74b698566d538b3';
  
  // Fetch pizzas by default and apply search and filter
  const searchRecipes = async () => {
    // Always include "pizza" in the query to filter for pizza recipes
    let query = `query=pizza`;
    if (searchTerm) {
      query += `&query=${searchTerm}`;
    }
    if (cuisine) {
      query += `&cuisine=${cuisine}`;
    }

    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?${query}&number=5&offset=${
        (currentPage - 1) * 5
      }&apiKey=${API_KEY}`
    );
    const data = await response.json();
    
    if (data.results) {
      setRecipes(data.results);
      setTotalPages(Math.ceil(data.totalResults / 5)); // Calculate total pages
    } else {
      setRecipes([]); // In case of no results
    }
  };

  // Fetch all pizzas when the component is first loaded
  useEffect(() => {
    searchRecipes();
  }, [currentPage]);

  // Trigger search when user hits the search button
  const handleSearch = () => {
    setCurrentPage(1); // Reset to first page on new search
    searchRecipes();
  };

  return (
    <Box  p={5}>
      <Heading mb={5}>Pizza Recipes</Heading>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for pizza..."
        mb={3}
      />
      <Select
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Filter by cuisine"
        mb={3}
      >
        <option value="">All</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        {/* Add more cuisines */}
      </Select>
      <Button onClick={handleSearch} mb={5}>
        Search
      </Button>

      {recipes.length > 0 ? (
        <SimpleGrid columns={[1, 2, 3]} spacing={5}>
          {recipes.map((recipe) => (
            <Box key={recipe.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Link to={`/recipe/${recipe.id}`}>
                <Image src={recipe.image} alt={recipe.title} />
                <Box p={5}>
                  <Heading size="md">{recipe.title}</Heading>
                </Box>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      ) : (
        <Text>No recipes found.</Text>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage} // Function to update current page
      />
    </Box>
  );
};

export default HomePizzaSection;