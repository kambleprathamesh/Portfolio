import "./App.css";
import CursorPointer from "./components/cursorPointer";

import { Home } from "./pages/Homepage";
import { About } from "./pages/About";
import { NavBar } from "./components/Navbar";
import Skills from "./pages/Skils";
import { AcheivementsandExp } from "./pages/Acheivements";
import { Education } from "./pages/Education";
import { Contact } from "./pages/Contact";
import { Project } from "./pages/Project";
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="App w-screen h-[100vh] overflow-x-hidden">
      <div className=" bg-[url(./images/banner.jpg)] bg-no-repeat bg-cover bg-center">
        <NavBar />
        <CursorPointer />
        <section id="home">
          <Home />
        </section>
      </div>
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="experience">
        <AcheivementsandExp />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default App;
