import React, { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setUsers } from "../redux/slice/userSlice";
import { useNavigate } from "react-router-dom";

function SignUp2() {
   const email = useRef(null);
   const password = useRef(null);
   const [error, setError] = useState("");
   const dispatch = useDispatch();
   const navigate =useNavigate()

   const handleSubmit = (e) => {
      e.preventDefault();
      const result = checkValidData(
         email.current.value,
         password.current.value
      );
      setError(result);
      if (result) return;

      createUserWithEmailAndPassword(
         auth,
         email.current.value,
         password.current.value
      )
         .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            navigate('/browse')

            // ...
         })
         .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
         });
   };

   return (
      <div>
         <form
            onSubmit={handleSubmit}
            className="absolute my-36 bg-[#000000] w-3/12 p-12 mx-auto right-0 left-0 text-white bg-opacity-80"
         >
            <h1 className="font-bold text-3xl mx-2 mb-7">Sign Up</h1>
            {error && <p>{error}</p>}
            <input
               type="text"
               placeholder="Email"
               className="p-2 m-2 w-full bg-[#333] text-white"
               ref={email}
            />
            <input
               type="password"
               placeholder="Password"
               className="p-2 m-2 w-full bg-[#333] text-white"
               ref={password}
            />

            <button className="w-full bg-red-700 p-2 mx-2 my-6">Sign Up</button>

            {/* <p className="text-gray-500 p-2">
               New to Netflix?{" "}
               <span className="text-white cursor-pointer">Sign up now</span>
            </p> */}
         </form>
      </div>
   );
}

export default SignUp2;
