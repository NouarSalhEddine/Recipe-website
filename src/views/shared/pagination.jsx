// src/components/Pagination.js
import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };
  const bgColor = useColorModeValue("gray.900", "gray.100"); // Dark background
  const textColor = useColorModeValue("gray.100", "gray.900"); 
  return (
    <HStack spacing={4} mt={5} justifyContent="center">
      <Button  color ={ useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }} onClick={handlePrevious} isDisabled={currentPage === 1}>
        Previous
      </Button>
      <Button  color ={ useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }} isDisabled>{`Page ${currentPage} of ${totalPages}`}</Button>
      <Button  color ={ useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }} onClick={handleNext} isDisabled={currentPage === totalPages}>
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;