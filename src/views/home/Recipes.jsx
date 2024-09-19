import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, SimpleGrid, Image, Heading, Text } from "@chakra-ui/react";
import Pagination from "../shared/pagination";
import { useSearch } from "../../context/SearchProvider";
import RecipeCard from "../shared/RecipeCard";

const HomeRecipesSection = ({ filter }) => {
  const [recipes, setRecipes] = useState([]);
  const {
    searchTerm,
    cuisine,
    currentPage,
    setCurrentPage,
    refresh,
    setSearchTerm,
  } = useSearch();
  const [totalPages, setTotalPages] = useState(0);
  const API_KEY = "d905b09ba20549b8af2b7114a370a904";
  console.log(refresh);
  const searchRecipes = async () => {
    console.log("fetching -----");
    let query = `query=${filter}`; 
    if (searchTerm) {
      query = `&query=${searchTerm}`;
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
      setTotalPages(Math.ceil(data.totalResults / 5)); 
    } else {
      setRecipes([]);
    }
  };

  useEffect(() => {
    console.log("filter", filter);
    searchRecipes();
    setSearchTerm("");
  }, [currentPage, cuisine, filter]);

  return (
    <Box mt={60} p={5}>
      {recipes.length > 0 ? (
        <SimpleGrid columns={[1, 2, 3]} spacing={5}>
          {recipes.map((recipe) => (
            // <Box key={recipe.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            //   <Link to={`/recipe/${recipe.id}`}>
            //     <Image src={recipe.image} alt={recipe.title} />
            //     <Box p={5}>
            //       <Heading size="md">{recipe.title}</Heading>
            //     </Box>
            //   </Link>
            // </Box>
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </SimpleGrid>
      ) : (
        <Text>No recipes found.</Text>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </Box>
  );
};

export default HomeRecipesSection;
