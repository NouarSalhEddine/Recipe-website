// src/components/Pagination.js
import React from 'react';
import { Button, HStack } from '@chakra-ui/react';

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

  return (
    <HStack spacing={4} mt={5} justifyContent="center">
      <Button onClick={handlePrevious} isDisabled={currentPage === 1}>
        Previous
      </Button>
      <Button isDisabled>{`Page ${currentPage} of ${totalPages}`}</Button>
      <Button onClick={handleNext} isDisabled={currentPage === totalPages}>
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;