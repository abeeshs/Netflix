import React, { useEffect } from "react";
import { TMDB_API_OPTION } from "../../constant";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../../redux/slice/movieSlice";
import MovieList from "./MovieList";

function CategorySection() {
   const dispatch = useDispatch();
   const movies = useSelector((state) => state.movie.topRatedMovies);
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
   return <MovieList movies={movies} category="Top Rated" />;
}

export default CategorySection;
