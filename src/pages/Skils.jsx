
// import React from "react";
import { backend, frontend, languages, tools } from "../data";

const Skills = () => {
  return (
    <section className=" bg-[#0a1019]">
      <div className="w-10/12 max-w-maxContent mx-auto pt-16 md:pt-36 pb-10 md:pb-44">
        <h3 className="text-3xl md:text-4xl text-[#55e6a5] font-sans  font-semibold uppercase text-start pb-10  ">
          Technical Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-10 ">
          {/* language */}
          <div className="w-72 border-[1px]  rounded-md border-[#55e6a5] flex flex-col gap-2 p-3">
            {" "}
            <h1 className="text-3xl text-white">Languages</h1>
            {languages.map((ele, index) => {
              return (
                <ul className=" md:w-60 flex flex-col p-1" key={index}>
                  <li
                    key={ele.id}
                    className="flex justify-between items-center "
                  >
                    <p className="text-lg md:text-2xl poppins-regular text-[#55e6a5] ">
                      {ele.skill}
                    </p>
                    <img src={ele.img} className=" w-[45px] h-[45px]" alt="" />
                  </li>
                </ul>
              );
            })}
          </div>
          {/* BE */}
          <div className="w-72 border-[1px]  rounded-md border-[#55e6a5] flex flex-col gap-2 p-3">
            {" "}
            <h1 className="text-[1.7rem] text-white">Backend & DataBase</h1>
            {backend.map((ele, index) => {
              return (
                <ul className="w-full md:w-60 flex flex-col p-1" key={index}>
                  <li
                    key={ele.id}
                    className="flex justify-between items-center "
                  >
                    <p className="text-lg md:text-2xl poppins-regular text-[#55e6a5] ">
                      {ele.skill}
                    </p>
                    <img src={ele.img} className=" w-[45px] h-[45px]" alt="" />
                  </li>
                </ul>
              );
            })}
          </div>
          {/* FE */}
          <div className="w-72 border-[1px]  rounded-md border-[#55e6a5] flex flex-col gap-2 p-3">
            {" "}
            <h1 className="text-3xl text-white">Frontend</h1>
            {frontend.map((ele, index) => {
              return (
                <ul className="w-full md:w-60 flex flex-col p-1" key={index}>
                  <li
                    key={ele.id}
                    className="flex justify-between items-center "
                  >
                    <p className="text-lg md:text-2xl poppins-regular text-[#55e6a5] ">
                      {" "}
                      {ele.skill}
                    </p>
                    <img src={ele.img} className=" w-[45px] h-[45px]" alt="" />
                  </li>
                </ul>
              );
            })}
          </div>
          {/* Tools */}
          <div className="w-72 border-[1px]  rounded-md border-[#55e6a5] flex flex-col gap-2 p-3">
            {" "}
            <h1 className="text-3xl text-white">Tools</h1>
            {tools.map((ele, index) => {
              return (
                <ul className="w-full md:w-60 flex flex-col p-1" key={index}>
                  <li
                    key={ele.id}
                    className="flex justify-between items-center "
                  >
                    <p className="text-lg md:text-2xl poppins-regular text-[#55e6a5] ">
                      {" "}
                      {ele.skill}
                    </p>
                    <img src={ele.img} className=" w-[45px] h-[45px]" alt="" />
                  </li>
                </ul>
              );
            })}
          </div>
          {/* Databases */}
          {/* <div className="w-72 border-[1px]  rounded-md border-[#55e6a5] flex flex-col gap-2 p-3">
            {" "}
            <h1 className="text-3xl text-white">Backend</h1>
            {databases.map((ele, index) => {
              return (
                <ul className="w-full md:w-60 flex flex-col p-1" key={index}>
                  <li
                    key={ele.id}
                    className="flex justify-between items-center "
                  >
                    <p className="text-lg md:text-2xl poppins-regular text-[#55e6a5] ">
                      {" "}
                      {ele.skill}
                    </p>
                    <img src={ele.img} className=" w-[45px] h-[45px]" alt="" />
                  </li>
                </ul>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
