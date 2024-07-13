import React from "react";

import { sidemenu } from "../data";
const sideBar = () => {
  return (
    <section className="text-white">
      <div>
        <div className="w-screen ">
          {sidemenu.map((ele, index) => {
            return (
              <ul className="w-[90%] flex flex-col items-start justify-start space-y-2 mt-2">
                <a href={`#${ele.menu.toLowerCase()}`} key={index}>
                  <li className="w-full text-lg text-start text-[#55e6a5] ">
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
