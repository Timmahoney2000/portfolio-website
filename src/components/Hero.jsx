/* eslint-disable no-unused-vars */
import React from "react";
import { BsDownload } from "react-icons/bs";
import avatarImg from "../assets/hero.jpg";
import CV from "../assets/cv.pdf";

const Hero = () => {
  return (
    <div className="text-black flex flex-col-reverse md:flex-row justify-center items-center py-10 px-5 sm:px10 lg:px-40 bg-gradient-to-t from-white to-yellow-50">
      <div className="w-full md:w-1/2 mb-10 text-center md:text-left">
        <h3 className="text-base md:text-lg lg:xl mb-0 md:-mb-2 text-orange-500">
          Hello, I am
        </h3>
        <h1 className="text-2xl md:text-4xl lg:text-6xl my-0 md:-my-0 font-bold py-2 md:py-2">
          Tim Mahoney
        </h1>
        <h3 className="text-base md:text-xl lg:text-2xl text-blue-600">
          Web Developer & UI/UX Designer
        </h3>
        <p className="text-sm md:text-1 lg:text-xl tracking-tighter">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quidem
          inventore veniam molestias tempora suscipit quis illum nihil eaque
          enim a commodi non, deserunt dolorem.
        </p>
        <div className="flex items-center justify-center md:justify-start gap-4 mt-5">
          <button className="bg-orange-400 px-10 py-1 rounded-lg mr-4 hover:bg-yellow-400">
            Hire Me
          </button>
          <a
            className="flex items-center text-orange-400 font-semibold"
            href={CV}
            download="cv.pdf"
          >
            Download CV <BsDownload className="ml-2 text-lg" />
          </a>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-10 md:px-0 flex justify-center items-center md:justify-end mb-20 md:mb-0">
        <img className="max-w-full h-auto" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Hero;
