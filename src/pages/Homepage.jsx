// import { TextRevealCardPreview } from "../components/TextRevealCardPreview";
// import {TextRevealCardPreview} from "../components/TextRevealCardPreview"
import { Hover } from "../components/HoverCard";
import gitHub from "../images/github.png";
import LinkedIn from "../images/linkedIn.png";
import insta from "../images/insta.png";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export const Home = () => {
  return (
    <section className="w-full h-screen ">
      <div className=" w-[85%] mx-auto flex flex-col md:flex-row justify-center">
        <div className="w-full flex flex-col justify-start  pt-[2rem] md:pt-[8rem]">
          <h1 className="text-white  text-3xl lg:text-5xl  uppercase font-Rowdies font-sans font-bold pb-10  md:pb-0">
            Hi,I'm Prathmesh! <br></br>
            {/* <span className="text- [#55e6a5]  text-4xl lg:text-6xl">Coder</span> */}
            <div class="dropping-texts text- [#55e6a5]  text-3xl font-sans  lg:text-6xl">
              <div>Coder</div>
              <div>Full Stack Web Developer</div>
              <div>Programmer</div>
              <div>EVERYONE!</div>
            </div>
           
          </h1>
          <div className="w-full flex flex-col-reverse gap-y-14 md:flex-row justify-center items-start mt-[3rem] ">
            <div>
              <p className="w-[75%] hidden md:block text-justify  text-gray-400 text-md font-sans font-semibold text-xl mt-[2rem]">
                I'm a Full Stack Web-developer, passionate about developing Web
                Applications by using modern Technologies which can help society
                as well as the country in terms of growth. I am still working on
                my skills and increase my knowledge in depth.
              </p>
              <div className="w-full flex justify-between  md:hidden  mx-auto">
                <div className="w-10 h-10 bg-[#55e6a5] rounded-xl p-2">
                  <img src={gitHub} alt="git" />
                </div>
                <div className="w-10 h-10 bg-[#55e6a5] rounded-xl p-2">
                  <img src={LinkedIn} alt="git" />
                </div>
                <div className="w-10 h-10 bg-[#55e6a5] rounded-xl p-2">
                  <img src={insta} alt="git" />
                </div>
                <div></div>
              </div>
              <div className="w-[13rem] h-12 lg:w-[17rem] lg:h-16 bg-[#55e6a5] p-2 lg:p-6 text-center   lg:leading-4 text-black  text-lg lg:text-xl lg:font-semibold  mt-[3rem] hover:bg-[#161c26] hover:text-white transition-all duration-500 cursor-pointer">
                Download Resume
                <ArrowDropDownIcon className="hidden lg:block" />
              </div>
            </div>

            <Hover />
          </div>
          {/* <p className="hidden md:block text-justify   text-gray-400 text-md font-sans font-semibold  mt-[2rem]">
            I'm a Full Stack Web-developer, passionate about developing Web
            Applications by using modern Technologies which can help society as
            well as the country in terms of growth. I am still working on my
            skills and increase my knowledge in depth.
          </p> */}
          {/* mobile screen  */}
          <div>
            <div>{/* contacts */}</div>
            <div>{/* personal image */}</div>
          </div>
          {/* small screen button */}
          {/* <div className="md:hidden lg:hidden w-44 h-10 rounded-md leading-3 p-4   bg- [#55e6a5]  text-center  text-black font-semibold  mt-[3rem] hover:bg-[#161c26] hover:text-white transition-all duration-500 cursor-pointer">
            Download Resume
          </div> */}
          {/* lg screen button */}
          {/* <div className="  w-[17rem] h-16 bg- [#55e6a5] p-6 text-center leading-4 text-black text-xl lg:font-semibold  mt-[3rem] hover:bg-[#161c26] hover:text-white transition-all duration-500 cursor-pointer">
            Download Resume <ArrowDropDownIcon className="hidden lg:block" />
          </div> */}
        </div>
        {/* <div className="w-full ml-16">
          <Hover />
        </div> */}
      </div>
    </section>
  );
};
