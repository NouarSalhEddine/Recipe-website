import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
// import { I18nextProvider } from "react-i18next";

import Theme from './themes/theme'
// import i18n from '@i18n/i18n'
import Router from '@routes/router'

function App () {
  return (
      <ChakraProvider theme={Theme}>
        <Router />
        <ColorModeScript />
      </ChakraProvider>
  )
}

export default App
