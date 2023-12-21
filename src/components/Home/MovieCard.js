import React from "react";

function MovieCard({ image }) {
   return (
      <div className="w-32">
         <img
            className=" "
            src={"https://image.tmdb.org/t/p/w500" + image}
            alt="poster"
         />
      </div>
   );
}

export default MovieCard;
