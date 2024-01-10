import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTION } from "../constant";
import { addTopRatedMovies } from "../redux/slice/movieSlice";

function useTopRatedMovies() {
   const dispatch = useDispatch();
   const getTopRatedMovies = async () => {
      try {
         const result = await fetch(
            "https://api.themoviedb.org/3/movie/top_rated",
            TMDB_API_OPTION
         );
         const movies = await result.json();
         dispatch(addTopRatedMovies(movies.results));
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      getTopRatedMovies();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
   return <div>useTopRatedMovies</div>;
}

export default useTopRatedMovies;
