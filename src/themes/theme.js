import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  
  
  colors: {
    lightMode: {
      primary: '#FEBD2F',
      secondary: '#F2A50A',
      background: '#F4F2ED',
      inputBackground: '#FFFFFF',
      text: '#1A2E4A',
      borderColor: '#E3E3E9'
    },
    darkMode: {
      primary: '#FEBD2F',
      secondary: '#1D2B83',
      background: '#1C1C1E',
      inputBackground: '#111111',
      text: '#F1F1F1',
      borderColor: '#373737'
    }
  },
  fonts: {
    heading: 'Poppins, Changa',
    body: 'Poppins, Changa'
  },
  fontDisplay: 'swap',
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
        borderRadius: 'md',
      },
      sizes: {
        lg: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === 'dark' ? 'accent.500' : 'accent.600',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'accent.400' : 'accent.700',
          },
        }),
      },
    },
    Input: {
      baseStyle: {
        field: {
          borderRadius: 'md',
        },
      },
    },
  },
});

export default theme;