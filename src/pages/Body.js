import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { removeUser, setUsers } from "../redux/slice/userSlice";
import appRouter from "../routes";

function Body() {
   const dispatch = useDispatch();

   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            const { uid, email } = user;
            dispatch(setUsers({ uid, email }));
            // window.location.href="http://localhost:3000/browse"
         } else {
            // User is signed out
            dispatch(removeUser());
            // window.location.href="http://localhost:3000"
         }
      });
   }, []);
   return (
      <div>
         <RouterProvider router={appRouter} />
      </div>
   );
}

export default Body;
