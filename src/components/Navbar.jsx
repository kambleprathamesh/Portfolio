// import MenuIcon from "@mui/icons-material/Menu";
// import "../index.css";
// import "../App.css";
// export const NavBar = () => {
//   return (
//     <div className="w-full flex justify-center fixed top-0 z-[100] ">
//       {/* logo */}
//       <div className="w-[80px] h-[80px]  bg-[#71f8ac]"></div>
//       {/* diffrent sections */}
//       <div className="w-10/12  max-w-[1080px] min-h-[80px]  bg-[#161c26] ">
//         <ul className="w-full h-full flex justify-evenly items-center text-white font-semibold text-xl ">
//           <a href="" className="hover:cursor-pointer">
//             Home
//           </a>
//           <a href="" className="hover:cursor-pointer">
//             About
//           </a>
//           <a href="" className="hover:cursor-pointer">
//             Skills
//           </a>
//           <a href="" className="hover:cursor-pointer">
//             Experience
//           </a>
//           <a href="" className="hover:cursor-pointer">
//             Education
//           </a>
//           <a href="" className="hover:cursor-pointer">
//             Projects
//           </a>
//           <a href="" className="hover:cursor-pointer">
//             Certificate
//           </a>
//           <a href="" className="hover:cursor-pointer">
//             Contact
//           </a>
//         </ul>
//       </div>
//       {/* menu bar */}
//       <div className="w-[80px] h-[80px] bg-[#71f8ac]">
//         <MenuIcon
//           style={{ width: 50, height: 50, marginTop: 10, marginLeft: 15 }}
//         />
//       </div>
//     </div>
//   );
// };

import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "../index.css";
import "../App.css";

export const NavBar = () => {
  const [hoveredNavItem, setHoveredNavItem] = useState(false);

  const handleMouseEnter = () => {
    setHoveredNavItem(true);
  };

  const handleMouseLeave = () => {
    setHoveredNavItem(false);
  };

  return (
    <div className="w-full mx-auto flex justify-evenly lg:justify-center fixed top-0  z-[100] border-4">
      {/* logo */}
      <div className="w-[80px] h-[80px] bg-[#71f8ac] text-4xl text-black font-semibold text-center flex justify-center items-center">KP</div>
      {/* different sections */}
      <div
        className="w-10/12 max-w-[1080px] min-h-[80px] bg-[#161c26] hidden lg:block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className="w-full h-full flex justify-evenly items-center text-white font-semibold text-xl">
          <a
            href=""
            className={`hover:cursor-pointer ${
              hoveredNavItem ? "hovered" : ""
            }`}
          >
            Home
          </a>
          <a
            href=""
            className={`hover:cursor-pointer ${
              hoveredNavItem ? "hovered" : ""
            }`}
          >
            About
          </a>
          <a
            href=""
            className={`hover:cursor-pointer ${
              hoveredNavItem ? "hovered" : ""
            }`}
          >
            Skills
          </a>
          <a
            href=""
            className={`hover:cursor-pointer ${
              hoveredNavItem ? "hovered" : ""
            }`}
          >
            Experience
          </a>
          <a
            href=""
            className={`hover:cursor-pointer ${
              hoveredNavItem ? "hovered" : ""
            }`}
          >
            Education
          </a>
          <a
            href=""
            className={`hover:cursor-pointer ${
              hoveredNavItem ? "hovered" : ""
            }`}
          >
            Projects
          </a>
          <a
            href=""
            className={`hover:cursor-pointer ${
              hoveredNavItem ? "hovered" : ""
            }`}
          >
            Certificate
          </a>
          <a
            href=""
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
        <MenuIcon
          style={{ width: 50, height: 50, marginTop: 10, marginLeft: 15 }}
        />
      </div>
    </div>
  );
};

export default NavBar;
