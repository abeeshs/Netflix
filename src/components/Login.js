import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setUsers } from "../redux/slice/userSlice";

function Login() {
   const navigate = useNavigate();
   const email = useRef(null);
   const password = useRef(null);
   const [error, setError] = useState("");
   const dispatch = useDispatch();

   const handleSubmit = (e) => {
      e.preventDefault();
      const message = checkValidData(
         email.current.value,
         password.current.value
      );

      setError(message);

      if (message) return;

      signInWithEmailAndPassword(
         auth,
         email.current.value,
         password.current.value
      )
         .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate('/browse')
            // ...
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError("Invalid credential");
            console.log(errorMessage);
         });
   };

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
         <form
            onSubmit={handleSubmit}
            className="absolute my-36 bg-[#000000] w-3/12 p-12 mx-auto right-0 left-0 text-white bg-opacity-80"
         >
            <h1 className="font-bold text-3xl mx-2 mb-7">Sign In</h1>
            {error && <p className="p-2 text-red-600">{error}</p>}
            <input
               type="text"
               placeholder="Email or phone number"
               className="p-2 m-2 w-full bg-[#333] text-white"
               ref={email}
            />
            <input
               type="password"
               placeholder="Password"
               className="p-2 m-2 w-full bg-[#333] text-white"
               ref={password}
            />

            <button className="w-full bg-red-700 p-2 mx-2 my-6">Sign In</button>

            <p className="text-gray-500 p-2">
               New to Netflix?{" "}
               <span
                  className="text-white cursor-pointer"
                  onClick={() => navigate("/in")}
               >
                  Sign up now
               </span>
            </p>
         </form>
      </div>
      // </div>
   );
}

export default Login;
