import React, { useEffect, useState } from "react";
import { NETFLIX_LOGO } from "../../constant";
import { CiSearch } from "react-icons/ci";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/slice/userSlice";
import { IoMdNotificationsOutline } from "react-icons/io";

function HomeHeader() {
   const dispatch = useDispatch();
   const handleSignOut = () => {
      signOut(auth)
         .then(() => {
            dispatch(removeUser());
            // navigate("/");
         })
         .catch((error) => {
            console.log(error);
         });
   };
   const [scrollPosition, setScrollPosition] = useState(0);
   console.log({ scrollPosition });
   const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
   };

   useEffect(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);
   return (
      <div
         className={
            scrollPosition > 0
               ? "w-full h-20 bg-black flex fixed top-0 "
               : "w-full h-20 bg-gradient-to-b from-black flex"
         }
      >
         <img src={NETFLIX_LOGO} alt="logo" className=" h-16 my-2 px-9 py-2" />
         <div className=" w-4/12">
            <ul className="flex py-6 justify-between text-white font-thin">
               <li>Home</li>
               <li>TV Shows</li>
               <li>Movies</li>
               <li>New & Popular</li>
               <li>My List</li>
               <li>Browse by language</li>
            </ul>
         </div>
         <div className="absolute h-20 right-0 w-72 py-6 flex">
            <CiSearch className="text-white text-3xl font-bold" />
            <p className="p-1 text-white">Children</p>
            <IoMdNotificationsOutline className="text-white text-2xl my-1 mx-3" />
            <button
               className="bg-red-600 px-2 rounded-md text-white mx-3"
               onClick={handleSignOut}
            >
               Sign Out
            </button>
         </div>
      </div>
   );
}

export default HomeHeader;
