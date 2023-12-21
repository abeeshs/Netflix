import React from "react";
import { NETFLIX_LOGO } from "../../constant";
import { CiSearch } from "react-icons/ci";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/slice/userSlice";

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
   return (
      <div className="w-full h-20 bg-gradient-to-b from-black flex ">
         <img src={NETFLIX_LOGO} alt="logo" className=" h-16 my-2 px-9 py-2" />
         <div className=" w-4/12">
            <ul className="flex my-2 py-5 justify-between text-white">
               <li>Home</li>
               <li>TV Shows</li>
               <li>Movies</li>
               <li>New & Popular</li>
               <li>My List</li>
               <li>Browse by language</li>
            </ul>
         </div>
         <div className="absolute h-20 right-0 w-52 py-6 flex">
            <CiSearch className="text-white text-4xl font-bold" />
            <p className="p-1 text-white">Children</p>
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
