import { Header } from "./components/Header";
import "./App.scss";

import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
