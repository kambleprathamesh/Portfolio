import React from "react";
import passportPhoto from "../images/passportphoto.png";
export const About = () => {
  return (
    <section className="w-full h-screen  md:h-[100vh] bg-[#03050a] flex flex-col  justify-between md:flex-row md:justify-center pb-8 relative">
      {/* left part */}

      <div className="w-[80%] max-w-maxContent mx-auto flex flex-col gap-y-10  pt-[2rem]  ml-[3rem] md:ml-[7rem] md:mt-28 ">
        <h3 className="text-3xl md:text-4xl text-[#55e6a5] font-sans  font-semibold uppercase text-start   ">
          About Me
        </h3>
        <h1 className="text-white text-[1.6rem] text-start md:text-start font-semibold md:font-bold md:text-4xl md:archivo-black-regular ">
          Transforming Skills Into Real Time Applications
        </h1>
        <div className="w-full md:w-[70%] flex flex-col lg:flex-row-reverse items-center  md:items-start gap-2">
          {/* small screen */}
          <div className=" md:hidden w-full flex justify-center relative -mt-10 ">
            <img
              src={passportPhoto}
              class="w-[120px]  rounded-lg mt-6 mr-4"
              alt=""
            />
            <p className="hidden md:block w-[400px] absolute -left-[2rem] top-[22rem] uppercase text-white text-3xl playfair-display-sc-regular ">
              Prathmesh Kamble
            </p>
            {/* </div> */}
          </div>
          <p className="w-full text-gray-400 text-sm md:text-lg font-medium md:font-semibold text-center md:text-left leading-relaxed">
            As a final-year Computer Engineering student at Datta Meghe College
            of Engineering, I'm passionate about technology and innovation.
            Skilled in the MERN stack, I build full-stack projects and
            participate in hackathons to solve real-world problems. Beyond
            coding, I'm active in college organizations, focusing on both
            technical and social impact initiatives. I'm dedicated to using my
            skills to drive positive change in both the tech community and
            society.
          </p>
        </div>
        {/* junior developer card */}

        <div class="md:w-[300px] group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 absolute left-32 md:left-[68rem] z-[80]  top-[43rem] md:top-[38rem]">
          <div class="group-hover:duration-400 relative rounded-2xl w-36 md:w-44 h-16 md:h-20 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0  before:w-36  md:before:w-44 before:h-16 md:before:h-20 before:-z-10">
            <span class="text-xl md:text-2xl font-bold">Jr</span>
            <p class="text- [#55e6a5]  text-[12px] md:text-sm font-semibold font-sans">
              - Full Stack Developer
            </p>
          </div>
        </div>
      </div>
      {/* right part */}
      <div className="hidden md:block w-[20%]  absolute right-0 top-32  ">
        <div className="w-full h-[300px] bg-[#55e6a5] rounded-lg absolute top-[4rem] right-[6rem]"></div>
        <div className="w-[95%] h-[300px] bg-[#414140]  rounded-lg  absolute top-[5rem] right-[7rem] ">
          <img
            src={passportPhoto}
            class="w-[240px]  rounded-lg mt-4 mr-4"
            alt=""
          />
          <p className="w-[400px] absolute -left-[1rem] top-[22rem] uppercase text-white text-3xl playfair-display-sc-regular ">
            Prathmesh Kamble
          </p>
        </div>
      </div>
    </section>
  );
};

// #232323
