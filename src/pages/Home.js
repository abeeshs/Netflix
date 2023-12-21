import React from "react";
import HomeHeader from "../components/Home/HomeHeader";
import TrailerVideo from "../components/Home/TrailerVideo";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import CategorySection from "../components/Home/CategorySection";

function Home() {
   useNowPlayingMovies();

   return (
      <div>
         <HomeHeader />
         <TrailerVideo />
         <CategorySection/>
      </div>
   );
}

export default Home;
