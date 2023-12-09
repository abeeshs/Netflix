import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Authentication from "./Authentication";
import Home from "./Home";
import SignUp from "../components/SignUp";

function Body() {
   const appRouter = createBrowserRouter([
      {
         path: "/",
         element: <Authentication />,
      },
      {
         path: "/in",
         element: <SignUp />,
      },
      {
         path: "/browse",
         element: <Home />,
      },
   ]);
   return (
      <div>
         <RouterProvider router={appRouter} />
      </div>
   );
}

export default Body;
