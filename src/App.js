import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { NavBar } from "./components/NavBar";
//import Section from "@mui/material/Section";

import { ContactForm } from "./components/ContactForm";
import { Typography } from "@mui/material";
import { ProjectCard } from "./components/ProjectCard";

export const App = () => {
  return (
    <div>
      <Box components="header">
        <NavBar />
      </Box>

      <Container sx={{ border: "1px solid black" }} maxWidth="lg">
        <Box components="section">About Me</Box>
        <Box components="section">
          <Typography variant="h2">My Projects</Typography> <ProjectCard />
        </Box>

        <Box components="section">
          <ContactForm />
        </Box>
      </Container>
      <Box components="section">Contact Info</Box>
    </div>
  );
};

export default App;
