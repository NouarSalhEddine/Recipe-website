import { Input, Button, Select, HStack } from '@chakra-ui/react';
import { useSearch } from '../context/SearchProvider';

const SearchFilterBar = () => {
  const { searchTerm, setSearchTerm, cuisine, setCuisine, setCurrentPage } = useSearch();

  const handleSearch = () => {
    setCurrentPage(1); // Reset to the first page when a new search is triggered
  };

  return (
    <HStack spacing={3} mb={5}>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for pizza..."
      />
      <Select
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
        placeholder="Filter by cuisine"
      >
        <option value="">All</option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        {/* Add more cuisines */}
      </Select>
      <Button onClick={handleSearch}>Search</Button>
    </HStack>
  );
};

export default SearchFilterBar;