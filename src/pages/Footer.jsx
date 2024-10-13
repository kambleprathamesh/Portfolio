import gitHub from "../images/github.png";
import LinkedIn from "../images/linkedIn.png";
import insta from "../images/insta.png";
import React from "react";

const Footer = () => {
  return (
    <section className=" bg-[#03050a] text-white">
      <div className="w-[93vw] h-[0.5px] bg-gray-600 mx-auto"></div>
      <div className=" w-11/12 h-32 mx-auto flex flex-col justify-start md:flex-row mt-2 md:mt-0    items-start  md:items-center md:justify-evenly  ">
        <div className=" md:w-1/2 ml-2 text-base md:text-lg text-white text-opacity-50  ">
          Made by ❤️ © 2024 Prathmesh Kamble
        </div>
        <div className="w-1/2 hidden md:block ">
          <div className=" flex md:justify-end space-x-5   mx-auto">
            <div className="w-10 h-10 bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa] rounded-xl p-2">
              <a href="https://github.com/kambleprathamesh" target="blank">
                <img src={gitHub} alt="git" />
              </a>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa] rounded-xl p-2">
              <a
                href="https://www.linkedin.com/in/prathamesh-kamble19/"
                target="blank"
              >
                <img src={LinkedIn} alt="git" />
              </a>
            </div>
            <div className="w-10 h-10 bg-gradient-to-r from-[#6dd5ed] to-[#80e3aa] rounded-xl p-2">
              <a
                href="https://www.instagram.com/kambleprathamesh19?igsh=Z3p5cHZlczdqYTlx"
                target="blank"
              >
                <img src={insta} alt="git" />
              </a>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
