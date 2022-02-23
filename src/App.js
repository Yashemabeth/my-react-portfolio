import { ContactForm } from "./components/ContactForm";

export const App = () => {
  return (
    <div>
      <header>Nav Bar</header>
      <section>
        <ContactForm />
      </section>
      <section>About Me</section>
      <section>My Project</section>
      <section>Contact Me</section>
    </div>
  );
};

export default App;
