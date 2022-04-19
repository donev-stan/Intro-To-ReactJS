import React from "react"
import { Box, ThemeProvider } from "@material-ui/core"
import theme from "./theme/theme"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Box container justify="center">
        <Box item xs={10}>
          <SearchBar />
        </Box>
      </Box>
    </ThemeProvider>
  );
};
