import js from "../images/java-script.png";
import java from "../images/java.png";
import html from "../images/html-5.png";
import css from "../images/css.png";
import reactjs from "../images/react.png";
import Tws from "../images/Tailwind_CSS_Logo.png";
import BS from "../images/bootstrap.png";
import mdb from "../images/icons8-mongo-db-48.png";
import github from "../images/github.jpg";
import dock from "../images/Docker-Logo-700x394.png";
import sql from "../images/icons8-mysql-logo-48.png";
import git from "../images/git.png";
import node from "../images/node.png"
import exp from "../images/express.jpg"
export const Skills = () => {
  return (
    <section className="w-full h-[111vh] bg-[#0a1019] ">
      <div className="w-[1240px] h-full mx-auto ">
        <h3 className="text-4xl  leading-4 text-[#79e9a2] font-sans  font-semibold uppercase text-start pt-[10rem]">
          Skills
        </h3>
        <div className=" flex flex-wrap justify-evenly ">
          {/* languages */}
          <div className="w-[25%] h-[200px] flex flex-col  border-[1px] border-[#79e9a2] mt-[4rem] p-[2rem]">
            <h1 className="text-white archivo-black-regular  text-4xl mb-6">
              Languages
            </h1>
            <ul>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">Java</p>
                <img src={java} className="w-[40px] h-[40px]" alt="" />
              </li>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">
                  JavaScript
                </p>
                <img src={js} className="w-[40px] h-[40px]" alt="" />
              </li>
            </ul>
          </div>

          {/* backend */}
          <div className="w-[25%] h-[200px] flex flex-col  border-[1px] border-[#79e9a2] mt-[4rem] p-[2rem]">
            <h1 className="text-white archivo-black-regular  text-4xl mb-6 ">
              Back-End
            </h1>
            <ul>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">
                  Express Js
                </p>
                <img src={exp} className="w-[40px] h-[40px]" alt="" />
              </li>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">
                  Node Js
                </p>
                <img src={node} className="w-[40px] h-[40px]" alt="" />
              </li>
            </ul>
          </div>
          {/* front-end */}
          <div className="w-[25%] flex flex-col gap-2  border-[1px] border-[#79e9a2] mt-[4rem] p-[2rem]">
            <h1 className="text-white archivo-black-regular  text-4xl mb-6 ">
              Front-End
            </h1>
            <ul>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">HTML</p>
                <img src={html} className="w-[40px] h-[40px]" alt="" />
              </li>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">
                  React JS
                </p>
                <img src={reactjs} className="w-[40px] h-[40px]" alt="" />
              </li>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">CSS</p>
                <img src={css} className="w-[40px] h-[40px]" alt="" />
              </li>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">
                  Tailwind
                </p>
                <img src={Tws} className="w-[40px] h-[40px]" alt="" />
              </li>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">
                  BootStrap
                </p>
                <img src={BS} className="w-[40px] h-[40px]" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className=" flex flex-wrap justify-start  ml-[5rem] gap-[5.5rem] mt-[-7rem] ">
          {/* databases */}
          <div className="w-[26%] h-[200px] flex flex-col  border-[1px] border-[#79e9a2]  p-[2rem]">
            <h1 className="text-white archivo-black-regular  text-4xl mb-6">
              DataBases
            </h1>
            <ul>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">
                  MongoDB
                </p>
                <img src={mdb} className="w-[40px] h-[40px]" alt="" />
              </li>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">SQL</p>
                <img src={sql} className="w-[45px] h-[45px]" alt="" />
              </li>
            </ul>
          </div>
          {/* tools */}
          <div className="w-[26%] h-[250px] flex flex-col  border-[1px] border-[#79e9a2]  p-[2rem]">
            <h1 className="text-white archivo-black-regular  text-4xl mb-6">
              Tools
            </h1>
            <ul>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">
                  Git-Hub
                </p>
                <img src={github} className="w-[40px] h-[40px]" alt="" />
              </li>
              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">Git</p>
                <img src={git} className="w-[50px] h-[50px]" alt="" />
              </li>

              <li className="w-full flex justify-start items-end gap-4">
                <p className="text-3xl poppins-regular text-[#79e9a2]">
                  Docker
                </p>
                <img src={dock} className="w-[50px] h-[50px]" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// bg color #0a1019
