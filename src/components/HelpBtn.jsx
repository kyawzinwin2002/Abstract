import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
const HelpBtn = () => {
  return (
    <button className=" fixed bottom-3 right-5 text-white flex items-center gap-2 rounded-2xl px-5 py-3 bg-[#4c5fd5]">
      <AiOutlineQuestionCircle className=" text-lg font-semibold"/>
      <span className=" text-lg font-semibold">Help</span>
    </button>
  );
   
};

export default HelpBtn;
