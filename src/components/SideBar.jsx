import React from "react";

import { sidemenu } from "../data";
const sideBar = () => {
  return (
    <section className="text-white">
      <div>
        <div className="w-screen flex flex-col items-start justify-start  gap-3">
          {sidemenu.map((ele, index) => {
            return (
              <ul className="w-[90%] ">
                <a href={`#${ele.menu.toLowerCase()}`}>
                  <li
                    key={index}
                    className="w-full text-lg text-start text-[#55e6a5] "
                  >
                    {ele.menu}
                  </li>
                </a>
                <div className="w-full h-[1px] bg-white opacity-50"></div>
              </ul>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default sideBar;

// import React from "react";
// import { Link } from "react-scroll";
// import { sidemenu } from "../data";

// const SideBar = () => {
//   return (
//     <section className="text-white">
//       <div>
//         <div className="w-screen flex flex-col items-start justify-start gap-3">
//           {sidemenu.map((ele, index) => (
//             <ul className="w-[90%]" key={index}>
//               <li className="w-full text-lg text-start text-[#55e6a5]">
//                 <Link
//                   to={ele.menu.toLowerCase()}
//                   smooth={true}
//                   duration={500}
//                   className="hover:cursor-pointer"
//                 >
//                   {ele.menu}
//                 </Link>
//               </li>
//               <div className="w-full h-[1px] bg-white opacity-50"></div>
//             </ul>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SideBar;
