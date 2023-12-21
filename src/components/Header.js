import React from "react";
import { NETFLIX_LOGO } from "../constant";

function Header() {
   return (
      <div className="absolute px-5 py-2 bg-gradient-to-b from-black z-10">
         <img className="w-52" src={NETFLIX_LOGO} alt="logo" />
      </div>
   );
}

export default Header;
