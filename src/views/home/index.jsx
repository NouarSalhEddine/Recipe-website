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
import { useSearch } from "../../context/SearchProvider";

import HomeRecipesSection from "./Recipes";

const HomeSection = () => {
  const bgColor = useColorModeValue("gray.900", "gray.100");
  const textColor = useColorModeValue("gray.100", "gray.900");
  const { selectedTab, setSelectedTab } = useSearch();
  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <Flex padding={2} overflowY="auto" flexDirection="column">
      <Tabs
        variant="soft-rounded"
        colorScheme="blue"
        index={selectedTab}
        onChange={handleTabChange}
      >
        <Heading
          bg={useColorModeValue("lightMode.background", "darkMode.background")}
          position="fixed"
          zIndex="100"
          pb={20}
          w="100%"
          pl={8}
          ml={2}
        >
          Learn, Cook, & Eat your food
        </Heading>

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
          {[
            "All Recipes",
            "Pizzas",
            "Dessert",
            "Noodle",
            "Cocktails",
            "Salad",
          ].map((label, index) => (
            <Tab
              key={label}
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue("gray.800", "gray.100")}
              style={{ border: "1px solid gray" }}
              _selected={{
                bg: bgColor,
                color: textColor,
              }}
              mx={2}
              minWidth="auto"
              onClick={() => handleTabChange(index)}
            >
              {label}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          <TabPanel>
            <HomeRecipesSection filter={selectedTab === 0 ? "All Recipes" : ""} />
          </TabPanel>
          <TabPanel>
            <HomeRecipesSection filter={selectedTab === 1 ? "Pizzas" : ""} />
          </TabPanel>
          <TabPanel>
            <HomeRecipesSection filter={selectedTab === 2 ? "Dessert" : ""} />
          </TabPanel>
          <TabPanel>
            <HomeRecipesSection filter={selectedTab === 3 ? "Noodle" : ""} />
          </TabPanel>
          <TabPanel>
            <HomeRecipesSection filter={selectedTab === 4 ? "Cocktails" : ""} />
          </TabPanel>
          <TabPanel>
            <HomeRecipesSection filter={selectedTab === 5 ? "Salad" : ""} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default HomeSection;
