import * as React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { NavBar } from "./components/NavBar";
//import Section from "@mui/material/Section";

import { ContactForm } from "./components/ContactForm";
import { Typography } from "@mui/material";
//import { ProjectCard } from "./components/ProjectCard";
import { Project } from "./components/Projects/project";
import { Stack } from "@mui/material";

//import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div>
      <Box components="header">
        <NavBar />
      </Box>

      <Container maxWidth="lg">
        <Box components="section">
          <Typography variant="h2">About Me</Typography>
          <Typography variant="h4">Bio</Typography>
          <Typography variant="h6">
            Yashema continues to work with Stingray Records and her latest
            singles “Zion” released 5th March 2021 and “Conversation” which is
            due to be released on 7th may 2021 were produced by Carlton ‘Dillie’
            McLeod. Her Most recent works saw the release of her Debut Album
            “Awakening” Produced by Carlton ‘Dillie’ McLeod on 13th November
            2020. Tracks like “I’m Just a Girl”, “Ooh La La’’ and “Prophecy” are
            featured on the Album. Her songs are a combination of Reggae,
            Lovers, Roots, Spiritual and Inspirational.
          </Typography>
        </Box>
        <Stack direction="row" spacing={4}>
          <Box components="section">
            <Typography variant="h2">My Projects</Typography> <Project />
          </Box>
        </Stack>
        <Box components="section">
          <ContactForm />
        </Box>
      </Container>
      <Box components="section">
        <Typography variant="h3"> Contact Info</Typography>
      </Box>
    </div>
  );
};

export default App;
