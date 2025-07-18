// import React from "react";
// // import passportPhoto from "../images/passportphoto.png";
// import passportPhoto from "../images/Prathmesh_Photo.jpg";

// export const About = () => {
//   return (
//     <section className="w-full h-screen    bg-[#03050a] flex flex-col  justify-between md:flex-row md:justify-center pb-8 relative">
//       {/* left part */}

//       <div className="w-[80%] max-w-maxContent mx-auto flex flex-col gap-y-10  pt-[2rem]  ml-[3rem] md:ml-[7rem] md:mt-28 ">
//         <h3 className="text-3xl md:text-4xl text-[#55e6a5] font-sans  font-semibold uppercase text-start   ">
//           About Me
//         </h3>
//         <h1 className="text-white text-[1.6rem] text-start md:text-start font-semibold md:font-bold md:text-4xl md:archivo-black-regular ">
//           Transforming Skills Into Real Time Applications
//         </h1>
//         <div className="w-full md:w-[70%] flex flex-col lg:flex-row-reverse items-center  md:items-start gap-2">
//           {/* small screen */}
//           <div className=" md:hidden w-full flex justify-center relative -mt-10 ">
//             <img
//               src={passportPhoto}
//               class="w-[120px]  rounded-lg mt-6 mr-4"
//               alt=""
//             />
//             <p className="hidden md:block w-[400px] absolute -left-[2rem] top-[22rem] uppercase text-white text-3xl playfair-display-sc-regular ">
//               Prathmesh Kamble
//             </p>
//             {/* </div> */}
//           </div>
//           <p className="w-full text-gray-400 text-sm md:text-lg font-medium md:font-semibold  md:text-left leading-relaxed text-justify">
//             I’m a Full Stack Developer with a strong foundation in the MERN
//             stack, recently graduated from Datta Meghe College of Engineering.
//             As SIH 2024 winner and 6× hackathon finalist, I’ve built scalable
//             web apps with RESTful APIs, MVC architecture, and cloud deployment.
//             During my SDE internship at PHICSIT, I contributed to UI
//             improvements and backend integration. As Technical Lead at the
//             Computer Society of India, I led workshops, mentored peers, and
//             co-organized major tech events. I thrive in collaborative
//             environments where learning, innovation, and clean code come
//             together to solve real problems.
//           </p>
//         </div>
//         {/* junior developer card */}
//         <div className="absolute left-28 md:left-[78vw] top-[44rem] md:top-[38rem] z-[100] group duration-500 skew-x-6 hover:skew-x-0 hover:translate-x-2 ">
//           <div className="relative w-36 md:w-44 h-16 md:h-20 rounded-2xl bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1  before:absolute before:content-[''] before:-skew-x-12 before:rounded-2xl before:bg-neutral-700 before:right-3 before:top-0 before:w-36 md:before:w-44 before:h-16 md:before:h-20 before:-z-10">
//             <span className="text-xl md:text-2xl font-bold">Jr</span>
//             <p className="text-[#55e6a5] text-[12px] md:text-sm font-semibold font-sans">
//               - Full Stack Developer
//             </p>
//           </div>
//         </div>
//       </div>
//       {/* right part */}
//       <div className="hidden md:block w-[20%] h-[300px] absolute right-0 top-32  ">
//         <div className="w-[80%] h-[300px] bg-[#55e6a5] rounded-lg absolute top-[4rem] right-[6rem]"></div>
//         <div className="w-[78%] md:h-[300px] bg-[#414140]  rounded-lg  absolute top-[5rem] right-[7rem] ">
//           <div>
//             <img
//               src={passportPhoto}
//               className="w-[240px]  rounded-lg mt-6 -ml-4 "
//               alt=""
//             />
//             <p className="w-[400px] absolute -left-[3rem] top-[22rem] uppercase text-white text-3xl playfair-display-sc-regular ">
//               Prathmesh Kamble
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from "react";
// import passportPhoto from "../images/passportphoto.png";
import passportPhoto from "../images/Prathmesh_Photo.jpg";

export const About = () => {
  return (
    <section className="w-full min-h-screen bg-[#03050a] flex flex-col md:flex-row pb-8 relative">
      {/* Left part */}
      <div className="w-[90%] max-w-maxContent mx-auto flex flex-col gap-y-10 pt-8 md:pt-28">
        <h3 className="text-3xl md:text-4xl text-[#55e6a5] font-sans font-semibold uppercase text-start">
          About Me
        </h3>

        <h1 className="text-white text-[1.6rem] md:text-4xl font-semibold md:font-bold text-start">
          Transforming Skills Into Real Time Applications
        </h1>

        <div className="w-full md:w-[70%] flex flex-col lg:flex-row-reverse items-center md:items-start gap-4">
          {/* Image for small screens */}
          <div className="md:hidden w-full flex justify-center">
            <img
              src={passportPhoto}
              className="w-[120px] rounded-lg mt-6"
              alt="Prathmesh Kamble"
            />
          </div>

          {/* Description */}
          <p className="w-full text-gray-400 text-sm md:text-lg  font-medium md:font-semibold leading-relaxed text-justify">
            I’m a Full Stack Developer with a strong foundation in the MERN
            stack, recently graduated from Datta Meghe College of Engineering.
            As SIH 2024 winner and 6× hackathon finalist, I’ve built scalable
            web apps with RESTful APIs, MVC architecture, and cloud deployment.
            During my SDE internship at PHICSIT, I contributed to UI
            improvements and backend integration. As Technical Lead at the
            Computer Society of India, I led workshops, mentored peers, and
            co-organized major tech events. I thrive in collaborative
            environments where learning, innovation, and clean code come
            together to solve real problems.
          </p>
        </div>

        {/* Jr Developer Badge - now in flow */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-44 md:mr-16">
          <div className="relative group duration-500 skew-x-6 hover:skew-x-0 hover:translate-x-2">
            <div className="w-36 md:w-44 h-16 md:h-20 rounded-2xl bg-zinc-800 text-gray-50 flex flex-col justify-center items-center gap-1 relative before:absolute before:content-[''] before:-skew-x-12 before:rounded-2xl before:bg-neutral-700 before:right-3 before:top-0 before:w-36 md:before:w-44 before:h-16 md:before:h-20 before:-z-10">
              <span className="text-xl md:text-2xl font-bold">Jr</span>
              <p className="text-[#55e6a5] text-[12px] md:text-sm font-semibold font-sans">
                - Full Stack Developer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right part - only for large screens */}
      <div className="hidden md:block w-[20%] h-[300px] absolute right-0 top-32">
        <div className="w-[80%] h-[300px] bg-[#55e6a5] rounded-lg absolute top-[4rem] right-[6rem]"></div>
        <div className="w-[78%] h-[300px] bg-[#414140] rounded-lg absolute top-[5rem] right-[7rem]">
          <img
            src={passportPhoto}
            className="w-[240px] rounded-lg mt-6 -ml-4"
            alt="Prathmesh Kamble"
          />
          <p className="w-[400px] absolute -left-[3rem] top-[24rem] uppercase text-white text-3xl playfair-display-sc-regular">
            Prathmesh Kamble
          </p>
        </div>
      </div>
    </section>
  );
};
