import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./config/theme";
import Main from "./Main";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Router>
          <Main />
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
