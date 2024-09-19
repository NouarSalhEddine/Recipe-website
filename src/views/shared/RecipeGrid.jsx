"use client";

import {
  Flex,
  Button,
  Box,
  Image,
  Text,
  Heading,
  useColorModeValue,
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

function RecipeCard({ recipe }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      position="relative"
      width="full"
      textAlign="center"
    >
      <Image
        src={recipe.image}
        alt={recipe.title}
        width="full"
        height="280px"
        objectFit="cover"
        roundedTop="lg"
      />
      <Box p={4}>
        <Box height="50px" overflow="hidden">
          <Heading size="md" noOfLines={2} textAlign="center" lineHeight="1.2">
            {recipe.title}
          </Heading>
        </Box>

        <Flex justifyContent="center" alignContent="center" mt={2}>
          <Rating rating={recipe.rating} numReviews={recipe.numReviews} />
        </Flex>
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={3}
        borderTop="1px solid"
        borderColor="gray.200"
        width="full"
      >
        <Text fontSize="sm" color="gray.500">
          20 min
        </Text>

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
