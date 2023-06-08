import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main/Main";
import ErrorPage from "../LayOuts/ErrorElement/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login/Login";
import SignUp from "../Pages/Authentication/SignUp/SignUp";
import Instractors from "../Pages/Instractors/Instractors";
import Classes from "../Pages/Classes/Classes";
import Dashboard from "../LayOuts/Dashboard/Dashboard";
import SelectedClass from "../Pages/DashboardPage/SelectedClass/SelectedClass";
import EnrolledClass from "../Pages/DashboardPage/EnrolledClass/EnrolledClass";
import PaymentHistory from "../Pages/DashboardPage/PaymentHistory/PaymentHistory";
import Pay from "../Pages/DashboardPage/PaymentHistory/Pay";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'instractors',
        element: <Instractors></Instractors>
      },
      {
        path: 'classes',
        element: <Classes></Classes>
      },

      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children :[
      {
        path : 'selectedclass',
        element : <SelectedClass></SelectedClass>
      },
      {
        path : 'pay',
        element : <Pay></Pay>
      },
      {
        path : 'enrolledclass',
        element :<EnrolledClass></EnrolledClass>
      },
      {
        path : 'paymenthistory',
        element : <PaymentHistory></PaymentHistory>
      },
    ]
  },
]);

export default router