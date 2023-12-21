import { createBrowserRouter } from "react-router-dom";
import Authentication from "./pages/Authentication";
import SignUp from "./components/SignUp";
import Home from "./pages/Home";
import Test from "./components/Home/Test";

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
   {
      path: "/test",
      element: <Test />,
   },
]);

export default appRouter;
