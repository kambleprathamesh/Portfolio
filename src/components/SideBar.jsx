import React from "react";

import { sidemenu } from "../data";
const sideBar = () => {
  return (
    <section className="text-white">
      <div className="w-screen">
        <div className="w-11/12 h-1/2  max-w-maxContent ">
          {sidemenu.map((ele, index) => {
            return (
              <ul className="w-[90%] flex flex-col items-start justify-start space-y-2 mt-2">
                <a href={ele.id} key={index}>
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
