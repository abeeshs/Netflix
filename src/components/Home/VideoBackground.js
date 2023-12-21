import React, { useEffect } from "react";
import { TMDB_API_OPTION } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../../redux/slice/movieSlice";

function VideoBackground({ movieId }) {
   const dispatch = useDispatch();
   const trailer = useSelector((state) => state.movie.trailerVideo);
   //Fetch movie trailer from tmdb
   const getVideos = async () => {
      const result = await fetch(
         `https://api.themoviedb.org/3/movie/${movieId}/videos`,
         TMDB_API_OPTION
      );
      const videos = await result.json();
      const onlyTrailer = videos?.results.find(
         (video) => video.type === "Trailer"
      );
      console.log(onlyTrailer);
      dispatch(addTrailerVideo(onlyTrailer));
   };
   useEffect(() => {
      getVideos();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return (
      <div className="absolute top-0 -z-10 w-full">
         <iframe
            className="w-full aspect-video "
            src={
               "https://www.youtube.com/embed/" +
               trailer?.key +
               "?&autoplay=1&mute=1&controls=0&loop=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         ></iframe>
      </div>
   );
}

export default VideoBackground;
