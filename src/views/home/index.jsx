import {
  Flex,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

import HomePizzaSection from "./Pizza";
import HomeDessertSection from "./Dessert";

const HomeSection = () => {
  const bgColor = useColorModeValue("gray.900", "gray.100"); // Dark background
  const textColor = useColorModeValue("gray.100", "gray.900"); // White text color
  return (
    <Flex padding={2} overflowY="auto" flexDirection="column">
      <Tabs variant="soft-rounded" colorScheme="blue">
        <TabList justifyContent="center">
          <Tab
           color ={ useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }}
            mx={2}
          >
            Pizzas
          </Tab>
          <Tab
            color ={ useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }}
            mx={2}
          >
            Dessert
          </Tab>
          <Tab
            color ={ useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }}
            mx={2}
          >
            Noodle
          </Tab>
          <Tab
            color ={ useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
              color: textColor,
            }}
            mx={2}
          >
            Cocktails
          </Tab>
          <Tab
            color ={ useColorModeValue("gray.800", "gray.100")}
            style={{ border: "1px solid gray" }}
            _selected={{
              bg: bgColor,
            }}
            mx={2}
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
