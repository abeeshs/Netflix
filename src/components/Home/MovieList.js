import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ category, movies,isTop }) {
   return (
      <div className={isTop?"pl-20 bg-gradient-to-t from-black via-black via-30% -my-9":"bg-black pl-20 -my-9"}>
         <h2 className="font-bold text-xl text-white ">{category}</h2>
         <div className="flex my-3 w-full overflow-x-scroll no-scrollbar">
            <div className="flex h-72">
               {movies?.map((movie) => (
                  <MovieCard image={movie.poster_path} key={movie.id} />
               ))}
            </div>
         </div>
      </div>
   );
}

export default MovieList;
