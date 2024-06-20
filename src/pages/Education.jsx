// import college from "../images/college.png";
import csi from "../images/csi.png";
import nss from "../images/nss.svg";
export const Education = () => {
  return (
    <div className="w-full h-[100vh]  bg-[#0a1019] relative">
      <div className="w-[1240px] h-full flex justify-between items-start mx-auto pt-[4rem]">
        {/* education */}
        <div className="w-1/2 ">
          <h3 className="text-4xl  leading-4 text-[#79e9a2] font-sans  font-semibold uppercase text-start pt-[6rem] mb-[4rem]">
            Education
          </h3>

          <div className="w-full h-[80%] flex flex-col gap-8 justify-center">
            {/* ssc */}
            <div className="w-[80%] h-[20%] border-[2px]  border-gray-400 rounded-md p-4">
              <h1 className="text-white archivo-black-regular text-2xl">SSC</h1>
              <h3 className="text-xl text-[#79e9a2] font-sans  font-semibold uppercase">
                Infant Jesus School,Ambernath
                <span className="text-xl text-white opacity-50 poppins-bold-italic ml-[10px]">
                  2019
                </span>
              </h3>
            </div>

            {/* hsc */}
            <div className="w-[80%] h-[20%]  border-[2px]  border-gray-400 rounded-md p-4">
              <h1 className="text-white archivo-black-regular text-2xl">HSC</h1>
              <h3 className="text-xl text-[#79e9a2] font-sans  font-semibold uppercase">
                Smt. CHM College,Ulhasnagar
                <span className="text-xl text-white opacity-50 poppins-bold-italic ml-[10px]">
                  2021
                </span>
              </h3>
            </div>
            {/* undergraduation */}
            <div className="w-[80%] h-[30%]  border-[2px]  border-gray-400 rounded-md p-6">
              <h1 className="text-white archivo-black-regular text-2xl">
                Undergraduation
              </h1>
              <h3 className="text-xl text-[#79e9a2] font-sans  font-semibold uppercase">
                Datta Meghe College Of Engineering,Airoli,Navi Mumbai{" "}
                <span className="text-xl text-white opacity-50 poppins-bold-italic ml-[10px]">
                  Pursuing
                </span>
              </h3>
            </div>
          </div>
        </div>
        {/* organization */}
        <div className="w-1/2 ">
          <h3 className="text-4xl  leading-4 text-[#79e9a2] font-sans  font-semibold uppercase text-start pt-[6rem] mb-[4rem]">
            Organizations
          </h3>

          <div className="w-full h-[80%] flex flex-col gap-8 justify-center relative">
            {/* CSI */}
            <div className="w-[90%] h-[30%] border-[2px]  border-gray-400 rounded-md p-4">
              {/* <h1 className="text-white archivo-black-regular text-4xl">SSC</h1> */}
              <h3 className="text-xl text-[#79e9a2] font-sans   font-semibold uppercase">
                Computer Society of India DMCE <br></br>
                <span className="text-lg text-white opacity-50 poppins-bold-italic capitalize ">
                  Technical and Development Team-(2023-24)
                </span>
                <img
                  src={csi}
                  className="w-20 h-15 absolute top-5 right-[6rem]"
                  alt=""
                />
              </h3>
            </div>

            {/* NSS */}
            <div className="w-[90%] h-[20%] border-[2px]  border-gray-400 rounded-md p-4">
              {/* <h1 className="text-white archivo-black-regular text-4xl">HSC</h1> */}
              <h3 className="text-lg text-[#79e9a2] font-sans  font-semibold uppercase">
                Natinoal Service Scheme <br></br>
                <span className="text-xl text-white opacity-50 poppins-bold-italic ml-[10px] capitalize">
                  volunteer- 2022-24
                </span>
                <img
                  src={nss}
                  className="w-19 h-14 absolute top-[9rem] right-[7rem]"
                  alt=""
                />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
