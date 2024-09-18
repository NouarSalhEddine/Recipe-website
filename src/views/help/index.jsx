/* eslint-disable react/no-unescaped-entities */
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, useColorModeValue } from '@chakra-ui/react'

const HelpSection = () => {
  return (
    <Flex padding={4} width='100%' flex={1} justifyContent='center' alignItems='center'>
      <Accordion backgroundColor={useColorModeValue('white', 'black')} allowToggle width={{ base: '100%', md: '60%' }}>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                What is My-Recipes?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            My-Recipes is a platform where you can search for and discover recipes from various cuisines, including pizza, desserts, and more. You can save your favorite recipes and keep track of the ones you want to try.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                How do I add a recipe to my favorites?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            To add a recipe to your favorites, simply navigate to the recipe's page and click on the "Add to favorites" button. This will save it to your personal collection for easy access later.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                Can I search for specific types of recipes?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Yes, you can use the search bar to look for specific recipes by name or ingredient. You can also filter results by cuisine type, such as Italian, Mexican, or desserts, to find exactly what you're craving.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as='span' flex='1' textAlign='left'>
                How do I filter recipes by cuisine?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            To filter recipes by cuisine, simply select a cuisine type from the filter dropdown on the homepage. This will show you recipes from the selected cuisine, such as pizza from Italian cuisine or tacos from Mexican cuisine.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  )
}

export default HelpSection