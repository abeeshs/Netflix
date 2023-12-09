import React from "react";
import Header from "./Header";

function Login() {
   return (
      <div>
         <Header />
         <div className="absolute bg-black">
            <img
               className="opacity-60  w-[100%]"
               src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"
               alt="bgimg"
            />
         </div>
         {/* <div className="absolute my-36 w-3/12 "> */}
         <form className="absolute my-36 bg-[#000000] w-3/12 p-12 mx-auto right-0 left-0 text-white opacity-90" >
            <h1 className="font-bold text-3xl mx-2 mb-7">Sign In</h1>
            <input
               type="text"
               placeholder="Email or phone number"
               className="p-2 m-2 w-full bg-[#333] text-white"
            />
            <input
               type="password"
               placeholder="Password"
               className="p-2 m-2 w-full bg-[#333] text-white"
            />

            <button className="w-full bg-red-700 p-2 mx-2 my-6">Sign In</button>

            <p className="text-gray-500 p-2">
               New to Netflix? <span className="text-white">Sign up now</span>
            </p>
         </form>
      </div>
      // </div>
   );
}

export default Login;
