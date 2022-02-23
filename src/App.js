import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Section from "@mui/material/Section";

import { ContactForm } from "./components/ContactForm";

export const App = () => {
  return (
    <div>
      <box components="header">Nav Bar</box>
      <container sx={{ border: "1px solid black" }} maxWidth="lg">
        <box components="section">About Me</box>
        <box components="section">My Projects</box>
        <box>
          <ContactForm />
        </box>
      </container>
      <section>Contact Info</section>
    </div>
  );
};

export default App;
