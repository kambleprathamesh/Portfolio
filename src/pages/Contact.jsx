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
      <section className="w-full h-[85vh] md:h-screen  bg-[#03050a] pt-2  md:pt-[5rem] pb-5  ">
        <div className="w-10/12 max-w-maxContent md:flex md:justify-between mx-auto h-full  ">
          <div className="w-[40%]  ">
            <div className="hidden md:block bg-transparent  md:w-full  mt-20">
              <img
                src={contact}
                className="w-full object-fill "
                loading="lazy"
                alt="contactUs"
              />
            </div>
          </div>
          <div className="w-full   md:w-[45%] bg-[#0a1019] mt-10 pb-8 ">
            <h3 className="text-lg md:text-3xl text-[#fff] font-sans  font-semibold uppercase text-start ml-2 md:ml-14 p-2">
              Get In Touch with Me ?
            </h3>
            <p className="text-sm text-gray-400  text-start ml-3 md:ml-16  font-medium mb-2">
              Share your Projects, Lets Have a Discussion 
            </p>
            <form
              onSubmit={submitHandler}
              autoComplete="off"
              className="w-full flex flex-col items-start md:items-center ml-3 gap-6 "
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
              <button className="w-36 h-8 md:w-[12rem]  md:h-14  ml-31 bg-[#55e6a5] rounded-lg text-center leading-4 text-black text-xl md:font-semibold  cursor-pointer md:mr-[15rem]  hover:bg-[#161c26] hover:text-white transition-all duration-500 ">
                Send Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
