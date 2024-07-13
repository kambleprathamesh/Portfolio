import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "../index.css";
import "../App.css";
import SideBar from "../components/SideBar";
import logoCode from "../images/logoCode1.png"
export const NavBar = () => {
  const [sideBar, setSideBar] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(false);

  const handleMouseEnter = () => {
    setHoveredNavItem(true);
  };

  const handleMouseLeave = () => {
    setHoveredNavItem(false);
  };

  return (
    <div>
      {/* md lg screen navbar */}
      <div className="hidden  w-full mx-auto md:flex   md:justify-center fixed top-0  z-[100] ">
        {/* logo */}
        <div className="w-[80px] h-[80px] bg-[#55e6a5] text-4xl text-black font-semibold text-center flex justify-center items-center">
         PK
        </div>
        {/* different sections */}
        <div
          className="hidden md:block w-10/12 max-w-[1080px] min-h-[80px] bg-[#161c26]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="w-full h-full flex justify-evenly items-center text-white font-medium text-2xl">
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
              href="#experience"
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
              href="#project"
              className={`hover:cursor-pointer ${
                hoveredNavItem ? "hovered" : ""
              }`}
            >
              Projects
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
        <div className="w-[80px] h-[80px] bg-[#71f8ac]">
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
            <h3 className="text-4xl text-[#55e6a5]">PK</h3>
          </div>
          <div
            onClick={() => {
              setSideBar((prev) => !prev);
            }}
            className=""
          >
            <MenuIcon
              style={{
                color: "white",
                width: 50,
                height: 50,
                marginTop: 10,
                marginLeft: 15,
              }}
            />
          </div>
        </div>
        <div>{sideBar && <SideBar />}</div>
      </div>
    </div>
  );
};

export default NavBar;


// import React, { useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Link } from "react-scroll";
// import SideBar from "../components/SideBar";

// const NavBar = () => {
//   const [sideBar, setSideBar] = useState(false);
//   const [hoveredNavItem, setHoveredNavItem] = useState(false);

//   const handleMouseEnter = () => {
//     setHoveredNavItem(true);
//   };

//   const handleMouseLeave = () => {
//     setHoveredNavItem(false);
//   };

//   const toggleSideBar = () => {
//     setSideBar((prev) => !prev);
//   };

//   return (
//     <div>
//       {/* md lg screen navbar */}
//       <div className="hidden w-full mx-auto md:flex md:justify-center fixed top-0 z-[100]">
//         {/* logo */}
//         <div className="w-[80px] h-[80px] bg-[#55e6a5] text-4xl text-black font-semibold text-center flex justify-center items-center">
//           KP
//         </div>
//         {/* different sections */}
//         <div
//           className="hidden md:block w-10/12 max-w-[1080px] min-h-[80px] bg-[#161c26]"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <ul className="w-full h-full flex justify-evenly items-center text-white font-semibold text-xl">
//             <li>
//               <Link
//                 to="home"
//                 smooth={true}
//                 duration={500}
//                 className={`hover:cursor-pointer ${
//                   hoveredNavItem ? "hovered" : ""
//                 }`}
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="about"
//                 smooth={true}
//                 duration={500}
//                 className={`hover:cursor-pointer ${
//                   hoveredNavItem ? "hovered" : ""
//                 }`}
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="skills"
//                 smooth={true}
//                 duration={500}
//                 className={`hover:cursor-pointer ${
//                   hoveredNavItem ? "hovered" : ""
//                 }`}
//               >
//                 Skills
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="experience"
//                 smooth={true}
//                 duration={500}
//                 className={`hover:cursor-pointer ${
//                   hoveredNavItem ? "hovered" : ""
//                 }`}
//               >
//                 Experience
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="education"
//                 smooth={true}
//                 duration={500}
//                 className={`hover:cursor-pointer ${
//                   hoveredNavItem ? "hovered" : ""
//                 }`}
//               >
//                 Education
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="projects"
//                 smooth={true}
//                 duration={500}
//                 className={`hover:cursor-pointer ${
//                   hoveredNavItem ? "hovered" : ""
//                 }`}
//               >
//                 Projects
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to="contact"
//                 smooth={true}
//                 duration={500}
//                 className={`hover:cursor-pointer ${
//                   hoveredNavItem ? "hovered" : ""
//                 }`}
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//         {/* menu bar */}
//         <div className="w-[80px] h-[80px] bg-[#71f8ac]">
//           <MenuIcon
//             style={{ width: 50, height: 50, marginTop: 10, marginLeft: 15 }}
//           />
//         </div>
//       </div>

//       {/* sm screen navbar */}
//       <div className="md:hidden lg:hidden w-full flex flex-col justify-between items-start h-18 p-3 border-[2px] rounded-lg">
//         <div className="w-full flex flex-row justify-between items-center">
//           <div>
//             <h3 className="text-4xl text-[#55e6a5]">KP</h3>
//           </div>
//           <div onClick={toggleSideBar}>
//             <MenuIcon
//               style={{
//                 color: "white",
//                 width: 50,
//                 height: 50,
//                 marginTop: 10,
//                 marginLeft: 15,
//               }}
//             />
//           </div>
//         </div>
//         <div>{sideBar && <SideBar />}</div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;
