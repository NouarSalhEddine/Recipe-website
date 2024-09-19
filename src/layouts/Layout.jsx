import { Outlet } from "react-router-dom";
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
} from "@chakra-ui/react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import Footer from "./Footer";

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      bg={useColorModeValue("lightMode.background", "darkMode.background")}
    >
      {/* Sidebar */}
      <Sidebar onClose={onClose} display={{ base: "none", md: "block" }} />

      {/* Drawer for mobile */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <Sidebar onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <Box
        ml={{ base: 0, md: 60 }}
        flex="1"
        display="flex"
        flexDirection="column"
      >
        {/* Navbar */}
        <MobileNav onOpen={onOpen} />

        {/* Main content */}
        <Box
          flex="1"
          pt="120px" 
        >
          <Outlet />
        </Box>
        {/* Footer */}
        <Footer
          position="fixed"
          bottom="0"
          width="full"
        />
      </Box>
    </Box>
  );
};

export default Layout;