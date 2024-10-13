import "./projectCard.css";
import "../App.css";
// import github from "../images/icons8-github-24.png";
// import link from "../images/icons8-link-26.png";
import { toast } from "react-hot-toast";
export const ProjectCard = (props) => {
  return (
    <div class=" w-[80vw] md:w-[360px] h-[23rem] p-4 bg-gray-900 rounded-lg shadow-md transform hover:scale-105 border-[2px] border-[#79e9a2]  hover:shadow-2xl hover:shadow-[#79e9a2]  transition-transform duration-300 ease-in-out relative">
      <img
        class="w-full h-40 object-cover rounded-t-lg  "
        alt="Card"
        src={props.img}
      />
      <div class="w-full h-[10rem] pt-5 relative">
        <h2 class="text-xl text-white  font-semibold">{props.title}</h2>
        <p class="text-white h-40 text-[1.2rem] ">{props.tech}</p>
        <div class="flex justify-evenly items-center  ">
          {/* <button class="w-[5rem]  text-black  p-3 rounded-md bg-[#55e6a5] hover:bg-[#161c26] hover:text-white transition-all duration-500 cursor-pointer absolute top-[8rem] left-4">
            <a href={props.code} target="blank">
              <span
                onClick={() => {
                  if (!props.code) {
                    toast.error("Code Not Shared");
                  }
                }}
              >
                Code
              </span>
            </a>
          </button>
          <button class="w-[5rem]  text-black  p-3 rounded-md bg-[#55e6a5] hover:bg-[#161c26] hover:text-white transition-all duration-500 cursor-pointer absolute top-[8rem] right-4">
            <a href={props.view} target="blank">
              <span
                onClick={() => {
                  if (!props.view) {
                    toast.error("Website Not hosted");
                  }
                }}
              >
                View
              </span>
            </a>
          </button> */}
          <button className="w-[5rem] h-10 leading-3 text-black  font-semibold p-3 rounded-md bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa] hover:bg-gradient-to-r hover:from-[#00c6ff] hover:to-[#0072ff] hover:text-white transition-all duration-500 cursor-pointer absolute top-[8rem] left-4">
            <a href={props.code} target="blank">
              <span
                onClick={() => {
                  if (!props.code) {
                    toast.error("Code Not Shared");
                  }
                }}
              >
                Code
              </span>
            </a>
          </button>

          <button className="w-[5rem] h-10 leading-3 text-black font-semibold p-3 rounded-md bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa] hover:bg-gradient-to-r hover:from-[#00c6ff] hover:to-[#0072ff] hover:text-white transition-all duration-500 cursor-pointer absolute top-[8rem] right-4">
            <a href={props.view} target="blank">
              <span
                onClick={() => {
                  if (!props.view) {
                    toast.error("Website Not hosted");
                  }
                }}
              >
                View
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
