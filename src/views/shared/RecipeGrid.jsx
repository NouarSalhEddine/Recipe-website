"use client";

import {
  Flex,
  Button,
  Box,
  Image,
  Text,
  Heading,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

// Composant de notation
function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && "s"}
      </Box>
    </Box>
  );
}

// Composant pour afficher une carte de recette
function RecipeCard({ recipe }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      width="250px" // Largeur fixe de la carte
      height="350px" // Hauteur fixe de la carte
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p={4}
    >
        {/* Image en cercle */}
        <Image
          src={recipe.image}
          alt={recipe.title}
          borderRadius="full"
          boxSize="150px" // Taille de l'image
          objectFit="cover"
          mx="auto"
          mt={3}
        />
        <Box p={4}>
          <Heading size="md" noOfLines={2} textAlign="center">
            {recipe.title}
          </Heading>
          <Flex justifyContent="center" alignContent="center" mt={2}>
            <Rating rating={recipe.rating} numReviews={recipe.numReviews} />
          </Flex>
        </Box>

      {/* Section en bas de la carte */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
        borderTop="1px solid"
        borderColor="gray.200"
      >
        {/* Temps de préparation */}
        <Text fontSize="sm" color="gray.500">
         20 min
        </Text>

        {/* Bouton "View Recipe" */}
        <Button
          size="sm"
          bg="#E9F9F0"
          color="#21BA71"
          _hover={{ bg: "#21BA71", color: "#E9F9F0" }}
          as={Link}
          to={`/recipe/${recipe.id}`}
        >
          View Recipe
        </Button>
      </Box>
    </Box>
  );
}



export default RecipeCard;