import { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
import "../index.css";
import "../App.css";
import SideBar from "../components/SideBar";
import logoCode from "../images/logoCode1.png";
export const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(false);

  const handleMouseEnter = () => {
    setHoveredNavItem(true);
  };

  const handleMouseLeave = () => {
    setHoveredNavItem(false);
  };

  const toggleMenu = () => {
    setSideBar((prev) => !prev);
  };
  return (
    <div>
      {/* md lg screen navbar */}
      <div className="hidden  w-screen mx-auto md:flex md:justify-center fixed top-0  z-[100] ">
        {/* logo */}
        <div className="w-[80px] h-[80px] bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa] text-4xl text-black font-semibold text-center flex justify-center items-center">
          PK
        </div>
        {/* different sections */}
        <div
          className="hidden md:block w-10/12 max-w-maxContent min-h-[80px] bg-[#161c26]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul
            className="w-full h-full flex justify-evenly items-center  font-semibold text-2xl"
            style={{
              background: "linear-gradient(to right, #6dd5ed, #80e3aa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent", // For Safari support
            }}
          >
            <a
              href="#home"
              className={`hover:cursor-pointer ${
                hoveredNavItem ? "hovered" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`hover:cursor-pointer ${
                hoveredNavItem ? "hovered" : ""
              }`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`hover:cursor-pointer ${
                hoveredNavItem ? "hovered" : ""
              }`}
            >
              Skills
            </a>
            <a
              href="#project"
              className={`hover:cursor-pointer ${
                hoveredNavItem ? "hovered" : ""
              }`}
            >
              Projects
            </a>
            <a
              href="#exp"
              className={`hover:cursor-pointer ${
                hoveredNavItem ? "hovered" : ""
              }`}
            >
              Experience
            </a>
            <a
              href="#education"
              className={`hover:cursor-pointer ${
                hoveredNavItem ? "hovered" : ""
              }`}
            >
              Education
            </a>

            <a
              href="#contact"
              className={`hover:cursor-pointer ${
                hoveredNavItem ? "hovered" : ""
              }`}
            >
              Contact
            </a>
          </ul>
        </div>
        {/* menu bar */}
        <div className="w-[80px] h-[80px] bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa]">
          {/* <MenuIcon
            style={{ width: 50, height: 50, marginTop: 10, marginLeft: 15 }}
          /> */}
          <img src={logoCode} alt="" />
        </div>
      </div>

      {/* sm screen navbar */}
      <div className="md:hidden lg:hidden w-full flex flex-col justify-between  items-start h-18 p-3 border-[2px] rounded-lg ">
        <div className="w-full flex flex-row justify-between items-center ">
          <div>
            <h3
              className="text-4xl text-[#55e6a5]"
              style={{
                background: "linear-gradient(to right, #6dd5ed, #80e3aa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              PK
            </h3>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            {sideBar ? (
              <div className="cross">
                <div className="bar1"></div>
                <div className="bar2"></div>
              </div>
            ) : (
              <div className="hamburger flex flex-col gap-1">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            )}
          </div>
        </div>
        <div>
          {sideBar && <SideBar closeSidebar={() => setSideBar(false)} />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
