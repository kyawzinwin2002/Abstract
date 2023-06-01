import React from 'react'
import { IoLogoWindows } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center py-5 justify-between px-24 bg-black text-white">
      {/* {LOGO} */}
      <div className="flex items-center gap-3">
        <div className=" flex items-center border-2 px-2 gap-2 border-black border-r-white">
          <IoLogoWindows className=" text-xl" />
          <h1 className=" text-2xl font-semibold">Abstract</h1>
        </div>
        <h1 className=" text-2xl">Help Center</h1>
      </div>

      {/* {Button/Sign IN} */}

      <div className=" flex items-center justify-between gap-3">
        <button className=" border-white text-2xl bg-[#191a1b] border rounded-md px-4 py-1 ">
          Submit a request
        </button>
        <button className=" bg-[#4C5FD5] text-2xl  text-white rounded-md px-4 py-1">
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar