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

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      minHeight="100vh"
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
      <Box ml={{ base: 0, md: 60 }}>
        {/* Navbar */}
        <MobileNav onOpen={onOpen} />
      </Box>
      {/* Main content */}
      <Box ml={{ base: 0, md: 60 }} pt="120px">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
