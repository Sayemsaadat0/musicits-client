import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main/Main";
import ErrorPage from "../LayOuts/ErrorElement/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";




  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement : <ErrorPage></ErrorPage>,
      children:[
        {
          path : '/',
          element : <Home></Home>
        },
        {
          path : 'login',
          element : <Login></Login>
        },
        {
          path : 'signup',
          element : <SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router