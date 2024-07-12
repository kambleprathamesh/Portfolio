// import js from "../images/java-script.png";
// import java from "../images/java.png";
// import html from "../images/html-5.png";
// import css from "../images/css.png";
// import reactjs from "../images/react.png";
// import Tws from "../images/Tailwind_CSS_Logo.png";
// import BS from "../images/bootstrap.png";
// import mdb from "../images/icons8-mongo-db-48.png";
// import github from "../images/github.jpg";
// import dock from "../images/Docker-Logo-700x394.png";
// import sql from "../images/icons8-mysql-logo-48.png";
// import git from "../images/git.png";
// import node from "../images/node.png";
// import exp from "../images/express.jpg";
// import { tools, databases, backend, frontend, languages } from "../data";
// const Skills = () => {
//   return (
//     <section className="w-full h-[111vh] bg-[#0a1019] ">
//       <div className="w-[1240px] h-full mx-auto ">
//         <h3 className="text-4xl  leading-4 text-[#55e6a5] font-sans  font-semibold uppercase text-start pt-[10rem]">
//           Skills
//         </h3>
//         <div className=" flex flex-wrap justify-evenly ">
//           {/* languages */}
//           <div className="w-[25%] h-[20%] flex flex-col  border-[1px] border-[#55e6a5] mt-[4rem] p-[2rem]">
//             <h1 className="text-white archivo-black-regular  text-4xl mb-6">
//               Languages
//             </h1>
//             {
//               languages.map((ele,index)=>{
//                 return <ul>
//                 <li className="w-full flex justify-start items-end gap-4" key={ele.id}>
//                   <p className="text-3xl poppins-regular text-[#55e6a5]">{ele.skill}</p>
//                   <img src={ele.img} className="w-[40px] h-[40px]" alt="" />
//                 </li>

//               </ul>
//               })
//             }

//           </div>

//           {/* backend */}
//           <div className="w-[25%] h-[200px] flex flex-col  border-[1px] border-[#55e6a5] mt-[4rem] p-[2rem]">
//             <h1 className="text-white archivo-black-regular  text-4xl mb-6 ">
//               Back-End
//             </h1>
//             <ul>
//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">
//                   Express Js
//                 </p>
//                 <img src={exp} className="w-[40px] h-[40px]" alt="" />
//               </li>
//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">
//                   Node Js
//                 </p>
//                 <img src={node} className="w-[40px] h-[40px]" alt="" />
//               </li>
//             </ul>
//           </div>
//           {/* front-end */}
//           <div className="w-[25%] flex flex-col gap-2  border-[1px] border-[#55e6a5] mt-[4rem] p-[2rem]">
//             <h1 className="text-white archivo-black-regular  text-4xl mb-6 ">
//               Front-End
//             </h1>
//             <ul>
//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">HTML</p>
//                 <img src={html} className="w-[40px] h-[40px]" alt="" />
//               </li>
//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">
//                   React JS
//                 </p>
//                 <img src={reactjs} className="w-[40px] h-[40px]" alt="" />
//               </li>
//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">CSS</p>
//                 <img src={css} className="w-[40px] h-[40px]" alt="" />
//               </li>
//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">
//                   Tailwind
//                 </p>
//                 <img src={Tws} className="w-[40px] h-[40px]" alt="" />
//               </li>
//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">
//                   BootStrap
//                 </p>
//                 <img src={BS} className="w-[40px] h-[40px]" alt="" />
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className=" flex flex-wrap justify-start  ml-[5rem] gap-[5.5rem] mt-[-7rem] ">
//           {/* databases */}
//           <div className="w-[26%] h-[200px] flex flex-col  border-[1px] border-[#55e6a5]  p-[2rem]">
//             <h1 className="text-white archivo-black-regular  text-4xl mb-6">
//               DataBases
//             </h1>
//             <ul>
//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">
//                   MongoDB
//                 </p>
//                 <img src={mdb} className="w-[40px] h-[40px]" alt="" />
//               </li>
//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">SQL</p>
//                 <img src={sql} className="w-[45px] h-[45px]" alt="" />
//               </li>
//             </ul>
//           </div>
//           {/* tools */}
//           <div className="w-[26%] h-[250px] flex flex-col  border-[1px] border-[#55e6a5]  p-[2rem]">
//             <h1 className="text-white archivo-black-regular  text-4xl mb-6">
//               Tools
//             </h1>
//             <ul>
//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">
//                   Git-Hub
//                 </p>
//                 <img src={github} className="w-[40px] h-[40px]" alt="" />
//               </li>
//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">Git</p>
//                 <img src={git} className="w-[50px] h-[50px]" alt="" />
//               </li>

//               <li className="w-full flex justify-start items-end gap-4">
//                 <p className="text-3xl poppins-regular text-[#55e6a5]">
//                   Docker
//                 </p>
//                 <img src={dock} className="w-[50px] h-[50px]" alt="" />
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
//  export default Skills;

// // bg color #0a1019

// import React from "react";
import { backend,  frontend, languages, tools } from "../data";

const Skills = () => {
  return (
    <section className=" bg-[#0a1019]">
      <div className="w-10/12 max-w-maxContent mx-auto pt-16 md:pt-36 pb-10 md:pb-44">
        <h3 className=" text-3xl md:text-4xl  leading-4 text-[#55e6a5] font-sans  font-semibold uppercase text-start pb-8 ">
          Skills
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
