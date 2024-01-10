import React from "react";

function MovieCard({ image }) {
   return (
      <div className="w-32 hover:scale-125 transition duration-500">
         <img
            className=" "
            src={"https://image.tmdb.org/t/p/w500" + image}
            alt="poster"
         />
      </div>
   );
}

export default MovieCard;
