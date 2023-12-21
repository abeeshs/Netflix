import React from "react";
import VideoTItile from "./VideoTItile";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

function TrailerVideo() {
   const movies = useSelector((state) => state.movie.nowPlayingMovies);
   if (!movies) return;
   const oneMovie = movies[1];
   const { title, overview, id } = oneMovie;
 
   return (
      <div className="">
         <VideoBackground movieId={id} />
         <VideoTItile title={title} overview={overview} />
      </div>
   );
}

export default TrailerVideo;
