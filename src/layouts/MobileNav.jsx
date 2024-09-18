import { IconButton, Flex, HStack, useColorModeValue,Spacer } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { FiMenu } from "react-icons/fi";
import SearchFilterBar from "./SearchFilterBar";

import { ColorModeSwitcher } from "@components";

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      bg={useColorModeValue("lightMode.background", "darkMode.background")}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="130"
      alignItems="center"
      justifyContent={{ base: "space-between", md: "flex-start" }}
    position = "sticky"
      {...rest}
    >
      <SearchFilterBar />
      <Spacer></Spacer>
    <Flex
      bg={useColorModeValue("lightMode.background", "darkMode.background")}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      alignItems="center"
      justifyContent={{ base: "space-between", md: "flex-end" }}
      {...rest}
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
