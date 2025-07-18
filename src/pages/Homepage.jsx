import { Hover } from "../components/HoverCard";
import gitHub from "../images/github.png";
import LinkedIn from "../images/linkedIn.png";
import insta from "../images/insta.png";
// import resume from "../Resume/Prathmesh_Resume.pdf";
import resume from "../Resume/Prathmesh's_Software Engineering_Resume.pdf";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const Home = () => {
  return (
    <section className="w-full h-screen  ">
      <div className=" w-[85%] mx-auto flex flex-col  md:flex-row justify-center">
        <div className="w-full flex flex-col justify-start gap-y-8  pt-[2rem] md:pt-[8rem]">
          <h1 className="text-white  text-3xl font-bold lg:text-5xl  uppercase font-Rowdies font-sans  pb-10  md:pb-0">
            Hi,I'm Prathmesh! <br></br>
           
            <p className="text-2xl mt-4">
              Turning ideas into
              <span className="text-[#64FFDA]"> FAST</span>,{" "}
              <span className="text-[#64FFDA]">CLEAN</span>, and{" "}
              <span className="text-[#64FFDA]">REAL-WORLD</span>
            </p>
           
            <div className="dropping-texts text-[#55e6a5] text-3xl font-sans lg:text-6xl space-y-2 mt-3">
              <div className="animate-drop [animation-delay:5s]">Coder</div>
              <div className="animate-drop [animation-delay:7s]">
                Full Stack Web Developer
              </div>
              <div className="animate-drop [animation-delay:9s]">
                Programmer
              </div>
              <div className="hidden md:block animate-drop [animation-delay:11s]">
                EVERYONE!
              </div>
            </div>
          </h1>
          <div className="w-full flex flex-col-reverse gap-y-14 md:flex-row justify-center items-start lg:mt-[1rem]  ">
        
            <div>
              <p className="w-[75%] hidden md:block text-justify  text-gray-400 text-md font-sans font-semibold text-xl mt-[2rem]">
                I’m a Full Stack Web Developer who loves building simple, fast,
                and user-friendly web applications. I focus on creating digital
                solutions that solve real problems and make a positive impact.
                With a strong interest in learning and improving, I’m always
                exploring better ways to turn ideas into valuable online
                experiences.
              </p>
              <div className="w-full flex justify-between  md:hidden  mx-auto">
                <div className="w-10 h-10 bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa] rounded-xl p-2">
                  <a href="https://github.com/kambleprathamesh" target="blank">
                    <img src={gitHub} alt="git" />
                  </a>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa] rounded-xl p-2">
                  <a
                    href="https://www.linkedin.com/in/prathamesh-kamble19/"
                    target="blank"
                  >
                    <img src={LinkedIn} alt="git" />
                  </a>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa] rounded-xl p-2">
                  <a
                    href="https://www.instagram.com/kambleprathamesh19?igsh=Z3p5cHZlczdqYTlx"
                    target="blank"
                  >
                    <img src={insta} alt="git" />
                  </a>
                </div>
                {/* <div></div> */}
              </div>
              <div className="w-[13rem] h-12 lg:w-[15rem] lg:h-14 bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa] hover:bg-gradient-to-r hover:from-[#00c6ff] hover:to-[#0072ff]  p-2 lg:p-5 text-center   lg:leading-[1rem] text-black  text-lg  lg:font-semibold  mt-7 hover:bg-[#161c26] hover:text-white transition-all duration-500 cursor-pointer border border-[#55e6a5] rounded-md ">
                <a href={resume} download target="blank">
                  {" "}
                  Download Resume
                </a>

                <ArrowDropDownIcon className="hidden lg:block" />
              </div>
            </div>

            <Hover />
          </div>
        </div>
      </div>
    </section>
  );
};
