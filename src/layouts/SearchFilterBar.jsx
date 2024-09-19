import { Input, Button, Select, HStack } from "@chakra-ui/react";
import { useSearch } from "../context/SearchProvider";
import { useColorModeValue } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

const SearchFilterBar = () => {
  const {
    searchTerm,
    setSearchTerm,
    cuisine,
    setCuisine,
    setCurrentPage,
    setRefresh,
    setSelectedTab,
  } = useSearch();

  const handleSearch = () => {
    setSelectedTab(0);
    setCurrentPage(1);
    setRefresh((prev) => prev + 1);
  };

  return (
    <HStack ml={8}>
      <Input
        bg={useColorModeValue("white", "gray.800")}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for recipes..."
        borderColor="#FEBD2F"
        focusBorderColor="#F2A50A"
      />
      <Select
        bg={useColorModeValue("white", "gray.800")}
        borderColor="#FEBD2F"
        focusBorderColor="#F2A50A"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Filter by cuisine"
      >
        <option value="">All</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        {/* Add more cuisines */}
      </Select>
      <Button color="gray.200" bg="#FEBD2F" onClick={handleSearch}>
        <CiSearch style={{ height: "50px", width: "50px" }} />
      </Button>
    </HStack>
  );
};

export default SearchFilterBar;
