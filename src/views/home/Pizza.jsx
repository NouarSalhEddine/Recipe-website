import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  SimpleGrid,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';
import Pagination from '../shared/pagination';
import { useSearch } from '../../context/SearchProvider';

const HomePizzaSection = () => {
  const [recipes, setRecipes] = useState([]);
  const { searchTerm, cuisine, currentPage, setTotalPages } = useSearch();
  const API_KEY = '1336f6083c80423c98f25dc3ffaeb61c';
console.log(searchTerm);
  // Fetch pizzas by default and apply search and filter
  const searchRecipes = async () => {
    let query = `query=pizza`; // Default pizza search
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
      setRecipes([]);
    }
  };

  useEffect(() => {
    searchRecipes();
  }, [currentPage, searchTerm, cuisine]);

  return (
    <Box p={5}>
      <Heading mb={5}>Pizza Recipes</Heading>

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
        // totalPages={totalPages}
        // onPageChange={setCurrentPage}
      />
    </Box>
  );
};

export default HomePizzaSection;