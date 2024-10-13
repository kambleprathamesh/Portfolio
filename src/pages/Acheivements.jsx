import speaker from "../images/speaker.jpeg";
import rgit from "../images/rgit.jpeg";
import elctroviz from "../images/elctroviz.jpeg";
import git from "../images/gits.jpeg";
import hacktober from "../images/hactoberfest.jpeg";
import nic from "../images/nic.jpeg";
import { commonAch, hackathon } from "../data";
import "../App.css";
export const AcheivementsandExp = () => {
  return (
    <section className="w-full  bg-[#03050a]">
      <div className="w-10/12 h-auto max-w-maxContent mx-auto pt-10 md:pt-40">
        <h3 className="text-3xl md:text-4xl text-[#55e6a5] font-sans  font-semibold uppercase text-start  ">
          Achievements & Experinces
        </h3>
        {/* Speaker */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-6 mt-10">
          {commonAch.map((ele, index) => {
            return (
              <div className="text-white space-y-2 " key={index}>
                <h1 className=" md:h-16 lg:h-18  poppins-regular text-2xl md:text-2xl lg:text-3xl text-white lg:pb-4 ">
                  {ele.title}
                </h1>
                <div className="w-72 md:w-full  md:h-48 lg:h-72">
                  <img src={ele.img} alt="" />
                </div>
                <h3 className=" md:h-32 lg:h-24  text-white text-md  md:text-xl font-medium md:font-semibold lg:mt-3">
                  {ele.subheading}
                  <span className="text-md poppins-thin-italic ml-[10px]">
                    {ele.date}
                  </span>
                </h3>
                <div className="md:h-[55%] lg:h-80  flex flex-col justify-evenly md:justify-between ">
                  <p className="hidden md:block text-white text-base opacity-70 ">
                    {ele.desc}
                  </p>
                  {/* <p className=":hidden text-white text-base opacity-70 ">
                    {ele.desc1}
                  </p> */}

                  <button className="w-[200px]  h-10 border-[0.5px] border-[#55e6a5] border-opacity-55 text-[#55e6a5] rounded-lg p-3 poppins-regular text-center leading-[1rem] text-md ">
                    <a href={ele.link} target="blank">
                      View Post
                    </a>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* hackthon */}
        <div>
          <h1 className="mt-10 -mb-8 md:mt-8 md:h-16 lg:h-12  poppins-regular text-3xl  lg:text-4xl text-white ">
            Hackathons
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3  gap-5 mt-10 pb-10 md:pb-32">
            {hackathon.map((ele, index) => {
              return (
                <div className="text-white space-y-2 " key={index}>
                  <div className="w-72  md:w-full  md:h-48 lg:h-96">
                    <img src={ele.img} alt="" />
                  </div>
                  <h3 className=" md:h-32 lg:h-24  text-white text-md  md:text-xl font-medium md:font-semibold lg:mt-3">
                    {ele.subheading}
                    <span className="text-md poppins-thin-italic ml-[10px]">
                      {ele.date}
                    </span>
                  </h3>
                  <div className="">
                    <p className="md:h-72 lg:h-52 hidden md:block text-white text-base opacity-70 ">
                      {ele.desc}
                    </p>
                    <button className="w-[200px]  h-10 border-[0.5px] border-[#55e6a5] border-opacity-55 text-[#55e6a5] rounded-lg p-3 poppins-regular text-center leading-[1rem] text-md ">
                      <a href={ele.link}>View Post</a>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

// #03050a
<div className="w-full h-auto mt-12 p-2">
  <h1 className="poppins-regular  text-4xl text-white mb-[1rem] ">
    Hackthons:Team Brewing JS
  </h1>
  <div className="w-full flex justify-start gap-x-10 ">
    {/* 1st div */}
    <div className="w-[40%] flex flex-col justify-between">
      {/* left */}
      <div className="w-full  flex flex-col gap-2">
        <img
          src={rgit}
          className="w-[400px] rounded-sm border-[2px] border-gray-300"
          alt=""
        />
      </div>

      {/* right */}
      <div className="w-full flex flex-col gap-4  ">
        <h2 className="text-white text-xl font-semibold opacity-80 max-w-[400px] ">
          {/* Recursion National Level Hackathon Winner at Rajiv Gandhi
        Institute of Technology, Mumbai */}
          1st Position,Reccursion RGIT,Andheri,Mumbai
          <span className="text-xl poppins-thin-italic ml-[10px]">
            13&14/03/2024
          </span>
        </h2>
        <p className="text-white text-md opacity-70 max-w-[400px] text-justify ">
          Team Brewing JavaScript won Recursion 5.0 at Rajiv Gandhi Institute of
          Technology, topping 130 teams. Our solution for the Multimodal Travel
          Planner included image recognition, text-based search, hotel
          recommendations, and nearby attractions suggestions, delivering a
          seamless travel experience.
        </p>
        <button className="w-[200px]  h-8 border-[1px] border-[#55e6a5] text-[#55e6a5] rounded-sm p-3 poppins-regular text-center leading-[0.5rem] text-md ">
          <a href="https://www.linkedin.com/posts/prathamesh-kamble19_csi-git-tech-activity-7127158817624104961-xFN6?utm_source=share&utm_medium=member_desktop">
            View Post
          </a>
        </button>
      </div>
    </div>
    {/* 2nd div */}
    <div className="w-[40%] flex flex-col justify-between">
      <div className="w-full  flex flex-col gap-2">
        <img
          src={elctroviz}
          className="w-[400px] rounded-sm border-[2px] border-gray-300"
          alt=""
        />
      </div>

      <div className="w-full flex flex-col gap-4  ">
        <h2 className="text-white text-xl font-semibold opacity-80 max-w-[400px] ">
          {/* Recursion National Level Hackathon Winner at Rajiv Gandhi
        Institute of Technology, Mumbai */}
          1st Position,Electroviz,DMCE,Airoli,Navi Mumbai
          <span className="text-xl poppins-thin-italic ml-[10px]">
            04/04/2024
          </span>
        </h2>
        <p className="text-white text-md opacity-70 max-w-[400px] text-justify ">
          Team Brewing JavaScript has clinched the coveted first prize at
          Electrowiz - National Level Project Presentation! Our brainchild,
          CampusConnect, stole the show in the fiercely competitive software
          category.
        </p>
        <button className="w-[200px]  h-8 border-[1px] border-[#55e6a5] text-[#55e6a5] rounded-sm p-3 poppins-regular text-center leading-[0.5rem] text-md ">
          <a href="https://www.linkedin.com/posts/prathamesh-kamble19_drumroll-please-breaking-news-folks-activity-7193887215934959617-NHbP?utm_source=share&utm_medium=member_desktop">
            View Post
          </a>
        </button>
      </div>
    </div>
    {/* 3rd div */}
    <div className="w-[40%] flex flex-col justify-between">
      {/* left */}
      <div className="w-full  flex flex-col gap-2">
        <img
          src={git}
          className="w-[400px] rounded-sm border-[2px] border-gray-300"
          alt=""
        />
      </div>

      {/* right */}
      <div className="w-full flex flex-col gap-4  ">
        <h2 className="text-white text-xl font-semibold opacity-80 max-w-[400px] ">
          {/* Recursion National Level Hackathon Winner at Rajiv Gandhi
        Institute of Technology, Mumbai */}
          Participate in Multiple Hackthons
          <span className="text-xl poppins-thin-italic ml-[10px]"></span>
        </h2>
        <p className="text-white text-md opacity-70 max-w-[400px] text-justify ">
          March was a whirlwind of innovation as my team conquered two
          hackathons. At Hacksparrow, we crafted an On Voice Command News
          Website for the visually impaired. Simultaneously, at Hackathon 2.0,
          we revolutionized college placements with an Interactive Platform.
          Together, team Brewing JavaScript turned challenges into impactful
          solutions, pushing boundaries and shaping a limitless future.
        </p>
        <button className="w-[200px]  h-8 border-[1px] border-[#55e6a5] text-[#55e6a5] rounded-sm p-3 poppins-regular text-center leading-[0.5rem] text-md ">
          <a href="https://www.linkedin.com/posts/prathamesh-kamble19_hackathonheroes-innovation-hackathon-activity-7193884496558014464-0OCF?utm_source=share&utm_medium=member_desktop">
            View Post
          </a>
        </button>
      </div>
    </div>
  </div>
</div>;
