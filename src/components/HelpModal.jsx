import React, { useState }  from 'react'
import { AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
const HelpModal = () => {
  
    const closeHandler = () => {
      
        document.querySelector("#modal").classList.add("hidden")
    }
  return (
    <div
      id="modal"
      className=" fixed flex flex-col w-[300px] h-[400px] bg-white  right-3 z-50 bottom-24 rounded-2xl hidden  overflow-hidden"
    >
      {/* {Header} */}
      <div className="flex relative text-white justify-center bg-[#4C5FD5] py-3 items-center ">
        <h1 className=" text-lg ">Abstract</h1>
        <button onClick={closeHandler} className="absolute right-0 text-xl mr-3 font-bold">
         <AiOutlineClose/>
        </button>
      </div>

      {/* {Footer/TextArea} */}
      <div className=" flex justify-center flex-col gap-5 px-3 mt-auto pb-3">
        <div className=" flex justify-end ">
          <button className="text-sm rounded-2xl border px-5 py-1 border-[#4C5FD5] text-[#4C5FD5]">
            Get in touch
          </button>
        </div>
        <textarea
          className="  border border-gray-500 p-3 "
          name=""
          id=""
          cols="25"
          rows="3"
          placeholder="Type your questions here"
        ></textarea>
      </div>
    </div>
  );
}

export default HelpModal