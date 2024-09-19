import React, { createContext, useState, useContext } from 'react';

// Create the context
const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [refresh, setRefresh] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <SearchContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        cuisine,
        setCuisine,
        currentPage,
        setCurrentPage,
        setRefresh,
        refresh,
        selectedTab,
        setSelectedTab,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

// Custom hook to use the SearchContext
export const useSearch = () => {
  return useContext(SearchContext);
};