import { IconButton, Flex, HStack, useColorModeValue, Spacer } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FiMenu } from "react-icons/fi";
import SearchFilterBar from "./SearchFilterBar";
import { ColorModeSwitcher } from "@components";

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      
      bg={useColorModeValue("lightMode.background", "darkMode.background")}
      width="100%"
      maxWidth={{ base: "100vw", md: "85vw" }}
      px={{ base: 4, md: 4 }}
      height="130px"  // Ajoute "px" pour définir correctement la hauteur
      alignItems="center"
      justifyContent={{ base: "space-between", md: "flex-start" }}
      position="fixed"
      zIndex="100"
      {...rest}
    >
      {/* Barre de recherche */}
      <SearchFilterBar />

      <Spacer />

      <Flex
        bg={useColorModeValue("lightMode.background", "darkMode.background")}
        alignItems="center"
        justifyContent={{ base: "space-between", md: "flex-end" }}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          icon={<FiMenu />}
        />

        <HStack spacing={{ base: "0", md: "6" }}>
          <ColorModeSwitcher />
        </HStack>
      </Flex>
    </Flex>
  );
};

MobileNav.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default MobileNav;