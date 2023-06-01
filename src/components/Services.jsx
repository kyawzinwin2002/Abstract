import React from 'react'

const Services = () => {
  return (
    <div className=" flex py-56 px-44 gap-7 justify-center">
      <div className=" flex gap-5 items-start">
        <img
          src="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png"
          alt=""
          className=" w-[90px]"
        />
        <div className=" flex flex-col gap-2">
          <h1 className=" text-2xl font-semibold">Branches</h1>
          <p className=" leading-8 text-2xl">
            Abstract lets you manage, version, and document your designs in one
            place.
          </p>
          <h1 className=" text-blue-600 text-2xl">Learn More</h1>
        </div>
      </div>
      <div className=" flex gap-5 items-start">
        <img
          src="https://theme.zdassets.com/theme_assets/2197739/aed6500f4da41c641f3de5d96247eb6654e9c386.png"
          alt=""
          className=" w-[100px]"
        />
        <div className=" flex flex-col gap-2">
          <h1 className=" text-xl font-semibold">Branches</h1>
          <p className=" leading-5 font-medium">
            Abstract lets you manage, version, and document your designs in one
            place.
          </p>
          <h1 className=" text-blue-600">Learn More</h1>
        </div>
      </div>
    </div>
  );
}

export default Services