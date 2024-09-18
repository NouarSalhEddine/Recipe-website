// src/pages/RecipeDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Heading, Text, List, ListItem } from '@chakra-ui/react';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const API_KEY = 'ee8ba18a80ea457ebe7b699636d79059';

  useEffect(() => {
    const fetchRecipeDetail = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
      );
      const data = await response.json();
      setRecipe(data);
    };
    fetchRecipeDetail();
  }, [id]);

  if (!recipe) return <Text>Loading...</Text>;

  return (
    <Box p={5}>
      <Heading mb={5}>{recipe.title}</Heading>
      <Image src={recipe.image} alt={recipe.title} mb={5} />
      <Heading size="md" mb={3}>
        Health Information
      </Heading>
      <List mb={5}>
        <ListItem>{recipe.vegan ? 'Vegan' : 'Not Vegan'}</ListItem>
        <ListItem>{recipe.dairyFree ? 'Dairy Free' : 'Contains Dairy'}</ListItem>
        {/* Add more health information */}
      </List>

      <Heading size="md" mb={3}>
        Ingredients
      </Heading>
      <List mb={5}>
        {recipe.extendedIngredients.map((ingredient) => (
          <ListItem key={ingredient.id}>
            {ingredient.name}: {ingredient.measures.us.amount} {ingredient.measures.us.unit}
          </ListItem>
        ))}
      </List>

      <Heading size="md" mb={3}>
        Cooking Instructions
      </Heading>
      <Text>{recipe.instructions}</Text>
    </Box>
  );
}

export default RecipeDetail;