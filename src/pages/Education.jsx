// import college from "../images/college.png";
import csi from "../images/csi.png";
import nss from "../images/nss.svg";
import { education, organization } from "../data";
import "../App.css";
export const Education = () => {
  return (
    <section className=" bg-[#0a1019]">
      <div className="w-10/12 max-w-maxContent mx-auto pt-16 md:pt-32 pb-28">
        <div>
          <h3 className="text-2xl md:text-4xl  leading-4 text-[#55e6a5] font-sans  font-semibold uppercase mb-7 md:mb-10">
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-14  ">
            {education.map((ele, index) => {
              return (
                <div className="flex flex-col gap-1 md:gap-3" key={index}>
                  <div className="w-28 p-2 md:w-48 md:h-16 border-[2px] border-[#55e6a5] rounded-sm text-[#55e6a5] text-lg md:text-2xl  font-sans font-medium  text-center flex items-center justify-center ">
                    {ele.passing}
                  </div>
                  <h1 className="text-white text-[1.1rem] text-start md:text-start font-semibold md:font-bold md:text-2xl md:archivo-black-regular ">
                    {ele.school}
                  </h1>
                  <h1 className="text-xl text-white text-opacity-50 .poppins-extrabold  md:ml-[10px]">
                    {ele.place}
                  </h1>
                  <h1 className="text-xl md:-mt-3  md:text-2xl font-medium text-white text-opacity-75">
                    {ele.deg}
                  </h1>
                </div>
              );
            })}
          </div>
          <div className="h-[70px] "></div>
          <h3 className="text-2xl md:text-4xl  leading-4 text-[#55e6a5] font-sans  font-semibold uppercase mb-4 md:mb-10">
            Organization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-14  ">
            {organization.map((ele, index) => {
              return (
                <div className="flex flex-col gap-3" key={index}>
                  <div className="w-24 md:w-48 md:h-16 border-[2px]  border-[#55e6a5] rounded-sm text-[#55e6a5] text-lg md:text-2xl  font-sans font-medium  text-center flex items-center justify-center">
                    {ele.passing}
                  </div>
                  <h1 className="text-white text-[1.2rem] text-start md:text-start font-semibold md:font-bold md:text-2xl md:archivo-black-regular ">
                    {ele.organization}
                  </h1>
                  <h1 className="text-xl text-white text-opacity-50 .poppins-extrabold -mt-3 md:ml-[10px]">
                    {ele.position}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
