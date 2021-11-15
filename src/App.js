import React, { useState } from "react";
import Box from "@mui/material/Box";
import About from "./components/About/index";
import Nav from "./components/Nav/index";
import Contact from "./components/Contact/index";
import Projects from "./components/Projects/index";
import Resume from "./components/Resume/index";
import Broken from "./components/Broken/index";
import Footer from "./components/Footer/index";
import "./index.css";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./utils/theme.js";


function App() {
  const [page, updateCurrentPage] = useState("About");
  const renderCorrectPage = () => {
    switch (page) {
      case "About":
        return <About />;

      case "Projects":
        return <Projects />;

      case "Contact":
        return <Contact />;

      case "Resume":
        return <Resume />;

      default:
        return <Broken updateCurrentPage={updateCurrentPage} />;
    }
  };
  return (
    <ThemeProvider theme={theme}>
    <div>
      <Nav updateCurrentPage={updateCurrentPage} />
      <Box mt={15}>
      {renderCorrectPage()}
      </Box>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default App;
