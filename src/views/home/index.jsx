import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

import HomePizzaSection from "./Pizza";
import HomeDessertSection from "./Dessert";

const HomeSection = () => {
  const bgColor = useColorModeValue("gray.900", "gray.100");
  const textColor = useColorModeValue("gray.100", "gray.900");

  return (
    <Flex padding={2} overflowY="auto" flexDirection="column">
      <Tabs variant="soft-rounded" colorScheme="blue">
      <Heading  bg={useColorModeValue("lightMode.background", "darkMode.background")}
          position="fixed"
          zIndex="100" pb={20} w="100%" pl={8} ml={2} >Learn, Cook, & Eat your food</Heading>
      
        <TabList 
          display="flex"
          flexWrap="wrap"
          w="100%"
          ml={8}
          marginTop="20" 
          bg={useColorModeValue("lightMode.background", "darkMode.background")}
          position="fixed"
          zIndex="100"
          justifyContent="flex-start"
          pb={20}
          pt={5}
        >
          <Tab
            color={useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }}
            mx={2}
            minWidth="auto"
          >
            All Recipes
          </Tab>
          <Tab
            color={useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }}
            mx={2}
            minWidth="auto"
          >
            Pizzas
          </Tab>
          <Tab
            color={useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }}
            mx={2}
            minWidth="auto"
          >
            Dessert
          </Tab>
          <Tab
            color={useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }}
            mx={2}
            minWidth="auto"
          >
            Noodle
          </Tab>
          <Tab
            color={useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }}
            mx={2}
            minWidth="auto"
          >
            Cocktails
          </Tab>
          <Tab
            color={useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
            }}
            mx={2}
            minWidth="auto"
          >
            Salad
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <HomePizzaSection />
          </TabPanel>
          <TabPanel>
            <HomeDessertSection />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default HomeSection;