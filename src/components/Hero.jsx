import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <div className=" w-screen h-[350px] bg-[#dadbf1] flex flex-col gap-5 justify-center items-center">
      <h1 className=" text-7xl ">How can we help?</h1>
      <div className=" relative">
        <input type="text" placeholder="Search" className=" focus-visible:outline-blue-500  w-[750px] px-5 py-4" />
        <AiOutlineArrowRight className=' absolute text-2xl top-4 right-1' />
      </div>
    </div>
  );
}

export default Hero