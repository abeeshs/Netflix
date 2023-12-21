import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTION } from "../constant";
import { addNowPlayingMovies } from "../redux/slice/movieSlice";

function useNowPlayingMovies() {
   const dispatch = useDispatch();
   //Fetch data from TMDB API
   const fetchMovies = async () => {
      const result = await fetch(
         "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
         TMDB_API_OPTION
      );
      const movies = await result.json();
      dispatch(addNowPlayingMovies(movies.results));
   };

   useEffect(() => {
      fetchMovies();
   }, []);
   return <div>useNowPlayingMovies</div>;
}

export default useNowPlayingMovies;
