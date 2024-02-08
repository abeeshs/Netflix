import React from "react";

function MovieCard({ image }) {
   return (
      // <div className="h-60 hover:scale-125 transition duration-500">
         <img
            className="w-32 h-52 hover:scale-125 transition duration-500"
            src={"https://image.tmdb.org/t/p/w500" + image}
            alt="poster"
         />
      // </div>
   );
}

export default MovieCard;
