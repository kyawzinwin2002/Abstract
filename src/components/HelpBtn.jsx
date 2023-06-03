import React, { useRef } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import HelpModal from "./HelpModal";
const HelpBtn = () => {
  const modalHandler = () => {
    document.querySelector("#modal").classList.remove("hidden")
  };
  return (
    <div className="">
      <button
        onClick={modalHandler}
        className=" fixed bottom-4 right-5 text-white flex items-center gap-2 rounded-2xl px-5 py-3 bg-[#4c5fd5]"
      >
        <AiOutlineQuestionCircle className=" text-lg font-semibold" />
        <span className=" text-lg font-semibold">Help</span>
      </button>
      <HelpModal  />
    </div>
  );
};

export default HelpBtn;
