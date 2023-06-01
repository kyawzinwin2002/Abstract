import React from 'react'
import { IoLogoWindows } from 'react-icons/io';

const Footer = () => {
  return (
    <div className=" bg-black text-white px-32 py-10 h-[400px] flex justify-between  ">
      {/* {LISTS} */}
      <div className=" flex items-start gap-20">
        <div className=" flex flex-col gap-4">
          <h1 className=" font-semibold text-2xl">Abstract</h1>
          <ul>
            <li>Branches</li>
          </ul>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" font-semibold text-2xl">Resources</h1>
          <ul>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Release Notice</li>
            <li>Status</li>
          </ul>
        </div>
        <div className=" flex flex-col gap-4">
          <h1 className=" font-semibold text-2xl">Community</h1>
          <ul>
            <li>Twitter</li>
            <li>Linkedln</li>
            <li>Facebook</li>
            <li>Dribbble</li>
            <li>Podcast</li>
          </ul>
        </div>
        <div className=" flex flex-col gap-4">
          <div className=" flex flex-col gap-4">
            <h1 className=" font-semibold text-2xl">Company</h1>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-4">
            <h1 className=" font-semibold text-2xl">Contact Us</h1>
            <ul>
              <li>info@abstract.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* {LOGO/COPYRIGHT} */}
      <div className=" flex flex-col mt-auto gap-5">
        <IoLogoWindows className=" text-3xl" />
        <div className=" flex flex-col gap-2">
          <h1>© Copyright 2022</h1>
          <h1>Abstract Studio Design, Inc.</h1>
          <h1>All rights reserved</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer