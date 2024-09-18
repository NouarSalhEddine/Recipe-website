import { Outlet } from 'react-router-dom';
import { Box, useColorModeValue, Drawer, DrawerContent, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';
import SearchFilterBar from './SearchFilterBar';

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState('');
  const [cuisine, setCuisine] = useState('');

  // Function to handle search
  const handleSearch = () => {
    // Implement search logic here, e.g., make an API call
    console.log('Searching for:', searchTerm, 'with cuisine:', cuisine);
  };

  return (
    <Box minHeight="100vh" bg={useColorModeValue('lightMode.background', 'darkMode.background')}>
      <Sidebar onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav onOpen={onOpen} 
      />
      <Box ml={{ base: 0, md: 60 }}>
     
        <Outlet
        />
      </Box>
    </Box>
  );
};

export default Layout;