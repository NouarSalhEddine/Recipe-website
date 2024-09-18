// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Input,
  Button,
  Select,
  SimpleGrid,
  Image,
  Heading,
  Text,
} from '@chakra-ui/react';

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
    console.log(recipes);
    if (searchTerm) {
      searchRecipes();
    }
  }, [searchTerm, cuisine, currentPage]);

  return (
    <Box p={5}>
      <Heading mb={5}>Recipe Search</Heading>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a recipe..."
        mb={3}
      />
      <Select value={cuisine} onChange={(e) => setCuisine(e.target.value)} mb={3}>
        <option value="">All</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        {/* Add more cuisines */}
      </Select>
      <Button onClick={searchRecipes} mb={5}>
        Search
      </Button>

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

      <Box mt={5}>
        <Button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          mr={2}
        >
          Previous
        </Button>
        <Text as="span">Page {currentPage}</Text>
        <Button onClick={() => setCurrentPage(currentPage + 1)} ml={2}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Home;