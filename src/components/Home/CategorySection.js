import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import usePopularMovies from "../../hooks/usePopularMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";

function CategorySection() {
   const topRated = useSelector((state) => state.movie.topRatedMovies);
   const popular = useSelector((state) => state.movie.popularMovies);
   const upComing = useSelector((state) => state.movie.upcomingMovies);
   useTopRatedMovies();
   usePopularMovies();
   useUpcomingMovies();

   return (
      <div className="">
         <MovieList movies={topRated} category="Top Rated" isTop={true} />;
         <MovieList movies={popular} category="Popular Movies" />;
         <MovieList movies={upComing} category="Upcoming Movies" />;
      </div>
   );
}

export default CategorySection;
