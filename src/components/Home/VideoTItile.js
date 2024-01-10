import React from "react";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";

function VideoTItile({ title, overview }) {
   return (
      <div className="mx-20 my-24 w-[600px]">
         <h1 className="text-5xl text-white font-bold">{title}</h1>
         <button className=" inline-flex items-center justify-center w-32 rounded-md bg-gray-600 h-12 my-7 bg-white text-black font-bold hover:opacity-80 ">
         <FaPlay className="mr-3" /> Play
         </button>
         <button className="inline-flex items-center w-36 justify-center rounded-md bg-gray-600 h-12 mx-3  text-white hover:opacity-80">
            <RiErrorWarningLine className="mr-3" /> More Info
         </button>
         <p className=" text-xl text-white font-medium">{overview}</p>
      </div>
   );
}

export default VideoTItile;
