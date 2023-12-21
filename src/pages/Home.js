import React from "react";
import HomeHeader from "../components/Home/HomeHeader";
import TrailerVideo from "../components/Home/TrailerVideo";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

function Home() {
   useNowPlayingMovies();

   return (
      <div>
         <HomeHeader />
         <TrailerVideo />
      </div>
   );
}

export default Home;
