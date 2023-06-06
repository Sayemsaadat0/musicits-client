import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main/Main";
import ErrorPage from "../LayOuts/ErrorElement/ErrorPage";




  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      errorElement : <ErrorPage></ErrorPage>
    },
  ]);

  export default router