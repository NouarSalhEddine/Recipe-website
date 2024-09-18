import { Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react'

import HomePizzaSection from './Pizza'
import HomeDessertSection from './Dessert'

const HomeSection = () => {
  return (
    <Flex
      padding={2}
      overflowY='auto'
      flexDirection='column'
    >
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <TabList justifyContent='center'>
          <Tab>Pizzas</Tab>
          <Tab>Dessert</Tab>
          <Tab>Noodle</Tab>
          <Tab>Cocktails</Tab>
          <Tab>Salad</Tab>
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
  )
}

export default HomeSection
