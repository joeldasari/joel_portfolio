import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

const App = () => {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
