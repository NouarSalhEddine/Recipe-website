// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Pagination from "../shared/pagination";
import { useSearch } from "../../context/SearchProvider";
import RecipeCard from "../shared/RecipeCard";
import { API_KEY } from "../shared/_constants";

// eslint-disable-next-line react/prop-types
const HomeRecipesSection = ({ filter }) => {
  const [recipes, setRecipes] = useState([]);
  const {
    searchTerm,
    cuisine,
    currentPage,
    setCurrentPage,
    setSearchTerm,
  } = useSearch();
  const [totalPages, setTotalPages] = useState(0);


  const searchRecipes = async () => {
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
