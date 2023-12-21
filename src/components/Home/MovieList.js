import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ category, movies }) {
   return (
      <div className=" mx-20 ">
         <h2 className="font-bold text-xl py-4 text-white ">{category}</h2>
         <div className="flex my-4 w-full overflow-x-scroll no-scrollbar">
            <div className="flex ">
               {movies?.map((movie) => (
                  <MovieCard image={movie.poster_path} key={movie.id} />
               ))}
            </div>
         </div>
      </div>
   );
}

export default MovieList;
