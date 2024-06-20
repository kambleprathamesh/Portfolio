import { useState } from "react";
import contact from "../images/contactus.png";
export const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  // input handler
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  console.log(data.name);
  console.log(data.email);
  console.log(data.number);
  console.log(data.message);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <section className="w-full  bg-[#03050a] pt-[5rem]">
        <div className="w-[1240px] flex justify-between mx-auto h-full  ">
          <div className="w-[40%] ">
            <img
              src={contact}
              className="w-[600px] mt-16 drop-shadow-xl shadow-[#80e3aa]"
              loading="lazy"
              alt="contactUs"
            />

            {/* download CV component */}
            {/* <div class="relative duration-300  hover:-rotate-0 [transform:rotate3d(1_,-1,_1,_60deg)] group border-sky-900 border-4  overflow-hidden rounded-2xl  h-80 w-82 bg-[#0a1019]  p-5 flex flex-col items-start gap-4 mt-[5rem]">
              <div class="text-gray-50">
                <span class="font-bold text-5xl">Jr</span>
                <p class="text-xs">Full Stack Developer</p>
              </div>
              <button class="w-[20rem] h-[3rem] duration-300 bg-[#79e9a2] rounded-lg hover:bg-sky-900 border hover:text-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">
                Dowload CV
                <svg
                  y="0"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0"
                  width="100"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                  height="100"
                  class="w-6 h-6 fill-current"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z"
                  ></path>
                </svg>
              </button>

              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                class="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-900"
              >
                <path
                  stroke-width="5"
                  stroke-miterlimit="10"
                  d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                  data-name="layer1"
                ></path>
              </svg>

              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                class="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-700"
              >
                <path
                  stroke-width="2"
                  stroke-miterlimit="10"
                  d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z"
                  data-name="layer1"
                ></path>
              </svg>
            </div> */}
          </div>
          <div className="w-[55%]  bg-[#0a1019] ">
            <h3 className="text-[30px]  leading-4 text-[#fff] font-sans  font-semibold uppercase text-start ml-[4rem] p-6">
              Get In Touch with Me ?
            </h3>
            <p className="w-[70%] mx-[13%] text-gray-400 text-xl text-start font-semibold ">
              Share your Projects,Lets Have a Discussion on it!
            </p>
            <form
              onSubmit={submitHandler}
              autoComplete="off"
              className="w-full flex flex-col items-center gap-6 p-6"
            >
              {/* name */}
              <input
                type="text"
                placeholder="Your Name"
                onChange={inputHandler}
                value={data.name}
                name="name"
                className="inputfieild"
              />
              {/* email */}
              <input
                type="email"
                placeholder="Your Email"
                onChange={inputHandler}
                value={data.email}
                name="email"
                className="inputfieild"
              />
              {/* number*/}
              <input
                type="tel"
                placeholder="Your Number"
                onChange={inputHandler}
                value={data.number}
                name="number"
                className="inputfieild"
              />
              {/* message */}
              <textarea
                placeholder="Message"
                onChange={inputHandler}
                value={data.message}
                name="message"
                className="messageArea row-span-10 col-span-7"
              ></textarea>
              {/* send button */}
              <button className="w-[12rem] bg-[#80e3aa] p-6 text-center leading-4 text-black text-xl font-semibold  cursor-pointer mr-[20rem]  hover:bg-[#161c26] hover:text-white transition-all duration-500 ">
                Send Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
