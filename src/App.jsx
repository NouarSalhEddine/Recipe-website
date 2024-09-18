import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
// import { I18nextProvider } from "react-i18next";

import Theme from "./themes/theme";
// import i18n from '@i18n/i18n'
import Router from "@routes/router";
import { SearchProvider } from "./context/SearchProvider";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <SearchProvider>
        <Router />
        <ColorModeScript />
      </SearchProvider>
    </ChakraProvider>
  );
}

export default App;
