// import logo from './logo.svg';
import "./App.css";
import CursorPointer from "./components/cursorPointer";
// import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Homepage";
import { About } from "./pages/About";
import { NavBar } from "./components/Navbar";
import Skills from "./pages/Skils";
import { AcheivementsandExp } from "./pages/Acheivements";
import { Education } from "./pages/Education";
import { Contact } from "./pages/Contact";
import { Project } from "./pages/Project";
import Footer from "./pages/Footer";
// import { AboutHover } from "./pages/AboutHover";
// import { banner } from "./images/banner.jpg";
function App() {
  return (
    <div className="App w-screen h-[100vh] overflow-x-hidden">
      <div className=" bg-[url(./images/banner.jpg)] bg-no-repeat bg-cover bg-center">
        <NavBar />
        <CursorPointer />
        <Home />
      </div>
      <About />
      <Skills />
      <Project />
      <AcheivementsandExp />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
