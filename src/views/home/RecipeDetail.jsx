import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Heading,
  Image,
  Text,
  UnorderedList,
  ListItem,
  VStack,
  Divider,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

function RecipeDetail({id}) {
  // const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  const API_KEY = "d905b09ba20549b8af2b7114a370a904";

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

  if (!recipe) return <Text color={"red"}>Loading...</Text>;

  return (
    <Box
      maxW="container.md"
      mx="auto"
      p={5}
      bg={useColorModeValue("gray.100", "gray.800")}
      borderRadius="lg"
      shadow="md"
    >
      <Heading as="h1" size="xl" mb={4}>
        {recipe.title}
      </Heading>
      <Image
        src={recipe.image}
        alt={recipe.title}
        borderRadius="md"
        mb={6}
        boxSize="full"
        objectFit="cover"
      />
      <VStack spacing={4} align="start">
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Health Information
          </Heading>
          <UnorderedList spacing={2}>
            <ListItem>{recipe.vegan ? "Vegan" : "Not Vegan"}</ListItem>
            <ListItem>
              {recipe.dairyFree ? "Dairy Free" : "Contains Dairy"}
            </ListItem>
            {/* Add more health information if needed */}
          </UnorderedList>
        </Box>
        <Divider />
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Ingredients
          </Heading>
          <UnorderedList spacing={2}>
            {recipe.extendedIngredients.map((ingredient) => (
              <ListItem key={ingredient.id}>
                {ingredient.name}: {ingredient.measures.us.amount}{" "}
                {ingredient.measures.us.unit}
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Divider />
        <Box>
          <Heading as="h2" size="lg" mb={2}>
            Cooking Instructions
          </Heading>
          <Text>{recipe.instructions}</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default RecipeDetail;
