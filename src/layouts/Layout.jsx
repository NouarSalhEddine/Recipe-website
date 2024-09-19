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

  return (
    <Box minHeight="100vh" bg={useColorModeValue('lightMode.background', 'darkMode.background')}>
      {/* Sidebar */}
      <Sidebar onClose={onClose} display={{ base: 'none', md: 'block' }} />

      {/* Drawer for mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} returnFocusOnClose={false} onOverlayClick={onClose} size="full">
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} >
      {/* Navbar */}
      <MobileNav onOpen={onOpen} />
 </Box>
      {/* Main content */}
      <Box ml={{ base: 0, md: 60 }} pt="120px"> {/* Le contenu démarre après la sidebar */}
        <Outlet  />
      </Box>
    </Box>
  );
};

export default Layout;