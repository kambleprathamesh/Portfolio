import React from "react";
import passportPhoto from "../images/passportphoto.png";
export const About = () => {
  return (
    <section className="w-full  h-[100vh] bg-[#03050a] pt-[8rem]  flex justify-center relative">
      {/* left part */}

      <div className="w-[80%] max-w-[1240px] mx-auto flex flex-col gap-y-8  pt-[4rem]  ml-[5rem] ">
        <h3 className="text-4xl  leading-4 text-[#79e9a2] font-sans  font-semibold uppercase mb-10">
          About Me
        </h3>
        <h1 className="text-white text-4xl archivo-black-regular ">
          Transforming Skills Into Real Time Applications
        </h1>
        <div className="w-[70%] flex items-start gap-5">
          <div className="w-[5rem] h-1 mt-2 bg-gray-500"></div>
          <p className=" text-gray-400 text-xl  font-semibold ">
            As a final-year Computer Engineering student at Datta Meghe College
            of Engineering, I'm passionate about technology and innovation.
            Proficient in the MERN stack, I build full-stack projects and
            participate in hackathons to solve real-world problems. Beyond
            coding, I'm active in college organizations, focusing on both
            technical and social impact initiatives. I'm dedicated to using my
            skills to drive positive change in both the tech community and
            society.
          </p>
        </div>
        {/* junior developer card */}

        <div class="w-[300px] group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2 absolute right-10 z-[80] top-[40rem]">
          <div class="group-hover:duration-400 relative rounded-2xl w-44 h-20 bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700 before:right-3 before:top-0 before:w-44 before:h-20 before:-z-10">
            <span class="text-2xl font-bold">Jr</span>
            <p class="text-[#79e9a2]  text-sm font-semibold font-sans">
              - Full Stack Developer{" "}
            </p>
          </div>
        </div>
        {/* education
        <div>
          <h3 className="text-4xl  leading-4 text-[#ffff] font-sans  font-semibold uppercase text-start pt-[8rem]">
            Education
          </h3>
        </div> */}
      </div>
      {/* right part */}
      <div className="w-[20%]  relative ">
        <div className="w-full h-[300px] bg-[#79e9a2] rounded-lg absolute top-[4rem] right-[6rem]"></div>
        <div className="w-full h-[350px] bg-[#131312]  rounded-lg  absolute top-[5rem] right-[7rem] ">
          <img src={passportPhoto} class="w-[240px]  rounded-lg mt-4 mr-4" alt="" />
          <p className="w-[400px] absolute -left-[2rem] top-[22rem] uppercase text-white text-3xl playfair-display-sc-regular ">
            Prathmesh Kamble
          </p>
        </div>
      </div>
    </section>
  );
};

// #232323
