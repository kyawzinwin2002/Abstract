import React from 'react'
import { CgArrowLongRight } from "react-icons/cg";
const ServiceCard = (props) => {
    const {image,paragraph,heading} = props
  return (
    <div className=" flex gap-5 items-start w-[40%]">
      <img
        src={image}
        alt=""
        className=" w-[90px]"
      />
      <div className=" flex flex-col gap-2">
        <h1 className=" text-2xl font-semibold">{heading}</h1>
        <p className=" leading-8 text-2xl">
          {paragraph}
        </p>
        <h1 className=" text-blue-600 flex items-center gap-2 text-xl">Learn More
        <CgArrowLongRight/></h1>
      </div>
    </div>
  );
}

export default ServiceCard