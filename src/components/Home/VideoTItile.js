import React from "react";

function VideoTItile({title,overview}) {
   return (
      <div className="mx-20 my-52 w-5/12">
         <h1 className="text-5xl text-white font-bold">{title}</h1>
         <button className="w-32 rounded-md bg-gray-600 h-12 my-7 bg-white text-black font-bold hover:opacity-80 ">
            Play
         </button>
         <button className="w-40 rounded-md bg-gray-600 h-12 mx-3  text-white hover:opacity-80">
            More Info
         </button>
         <p className=" text-xl text-white font-medium">
           {overview}
         </p>
      </div>
   );
}

export default VideoTItile;
