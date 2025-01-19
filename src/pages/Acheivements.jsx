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
        <div className="grid grid-cols-1 md:grid-cols-3  gap-10 mt-10">
          {commonAch.map((ele, index) => {
            return (
              <div className="text-white space-y-2 " key={index}>
                <h1 className=" md:h-16  md:w-[105%] lg:h-10  poppins-regular text-2xl md:text-2xl lg:text-xl  font-bold text-white lg:pb-4  ">
                  {ele.title}
                </h1>
                <div className="w-72  md:w-[105%] md:h-48 lg:h-80  ">
                  <img src={ele.img} alt="" />
                </div>
                <h3 className=" md:h-32 md:w-[105%] lg:h-24  text-white text-md  md:text-xl font-medium md:font-medium lg:mt-3 ">
                  {ele.subheading}
                  <span className="text-md poppins-thin-italic ml-[10px]">
                    {ele.date}
                  </span>
                </h3>
                <div className="md:h-[55%] lg:h-80 md:w-[105%] flex flex-col justify-evenly md:justify-between ">
                  <p className="hidden md:block text-white text-base opacity-70 ">
                    {ele.desc}
                  </p>

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

          <div className="grid grid-cols-1 md:grid-cols-3  gap-10 mt-10 pb-10 md:pb-32">
            {hackathon.map((ele, index) => {
              return (
                <div className="text-white space-y-2 " key={index}>
                  <div className="w-72  md:w-[105%]  md:h-48 lg:h-80 ">
                    <img src={ele.img} alt="" />
                  </div>
                  <h3 className=" md:h-32 lg:h-24 md:w-[105%]  text-white text-md  md:text-xl font-medium md:font-semibold ">
                    {ele.subheading}
                    <span className="text-md poppins-thin-italic ml-[10px]">
                      {ele.date}
                    </span>
                  </h3>
                  <div className="">
                    <p className="md:h-72 md:w-[105%]  lg:h-52 hidden md:block text-white text-base opacity-70 ">
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
