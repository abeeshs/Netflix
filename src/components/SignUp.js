import React, { useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router";
import SignUp2 from "./SignUp2";

function SignUp() {
   const navigate = useNavigate();
   const [showLogin, setShowLogin] = useState("false");
   return (
      <div>
         <Header />
         <div className="absolute m-9  z-10 right-0 top-0">
            {/* <select>
               <option>no</option>
            </select> */}

            <button
               className="p-1 rounded-md w-20 bg-red-600 text-white "
               onClick={() => navigate("/")}
            >
               Sign in{" "}
            </button>
         </div>

         <div className="absolute bg-black bg-gradient-to-l from-black w-[100%]">
            <img
               className="opacity-20  w-[100%]"
               src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
               alt="bgimg"
            />
         </div>
         {!showLogin ? (
            <div className="absolute my-72 mx-36 w-6/12">
               <h1 className="font-bold text-white text-6xl leading-[70px] ">
                  Unlimited Movies <br /> Tv Shows and more
               </h1>
               <h4 className="text-2xl text-white leading-[70px]">
                  Starts at ₹149 . Cancel at any time
               </h4>
               <p className="text-white">
                  Ready to watch? Enter your email to create or restart your
                  membership
               </p>
               <input
                  className="bg-black p-4 my-5 w-8/12 border-gray-400 rounded-md border text-white"
                  type="text"
               />
               <button className="bg-red-500 w-3/12 p-4 mx-5 text-white text-xl font-bold">
                  Get Started {">"}
               </button>
            </div>
         ) : (
            <SignUp2 />
         )}
      </div>
   );
}

export default SignUp;
