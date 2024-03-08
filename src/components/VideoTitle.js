import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdOutlineInfo } from "react-icons/md";

const VideoTitle = ({ title, overview }) => {
  const [show, setShow] = useState(false);
  const handleOverview = () => {
    setShow(!show);
  };
  return (
    <div className="w-screen aspect-video pt-[10%] px-14 absolute bg-gradient-to-r from-black cursor-pointer">
      <h1
        className="text-4xl font-bold text-yellow-500 mb-6 mt-24"
        onClick={handleOverview}
      >
        {title}
      </h1>
      {show && (
        <p className="pb-4 -mt-5 w-[50%] text-white opacity-45">{overview}</p>
      )}
      <div className=" flex">
        <button className="flex bg-white text-black px-7 py-2 font-bold text-lg  mr-4 rounded-sm hover:bg-opacity-80">
          <FaPlay className="m-[5px]" />
          Play
        </button>
        <button className="flex bg-gray-600 px-7 py-2 font-bold text-lg bg-opacity-50 rounded-sm text-white hover:bg-opacity-30">
          <MdOutlineInfo className="m-[3px] size-6" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
