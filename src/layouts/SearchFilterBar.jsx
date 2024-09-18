import { Input, Button, Select, HStack } from '@chakra-ui/react';
import { useSearch } from '../context/SearchProvider';

const SearchFilterBar = () => {
  const { searchTerm, setSearchTerm, cuisine, setCuisine, setCurrentPage,setRefresh } = useSearch();

  const handleSearch = () => {
    setCurrentPage(1); 
    setRefresh((prev) => prev + 1);
  };

  return (
    <HStack spacing={3} mb={5}>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for recipes..."
        borderColor="#FEBD2F"
        focusBorderColor="#F2A50A"
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