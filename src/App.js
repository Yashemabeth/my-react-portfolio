import { ContactForm } from "./components/ContactForm";

export const App = () => {
  return (
    <div>
      <header>Nav Bar</header>
      <section>About Me</section>
      <section>My Projects</section>
      <section>
        <ContactForm />
      </section>
      <section>Contact Info</section>
    </div>
  );
};

export default App;
