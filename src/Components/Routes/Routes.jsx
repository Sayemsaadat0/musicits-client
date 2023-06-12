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
import AddClass from "../Pages/DashboardPage/AddClass/AddClass";
import Manageclass from "../Pages/DashboardPage/ManageClass/Manageclass";
import ManageUsers from "../Pages/DashboardPage/ManageUsers/ManageUsers";
import DashboardHome from "../Pages/DashboardPage/DashboardHome/DashboardHome";
import AdminHome from "../Pages/DashboardPage/AdminHome/AdminHome";
import MyClasses from "../Pages/DashboardPage/MyClasses/MyClasses";
import PrivateRoutes from "./PrivateRoutes";




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
    element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    children :[
      {
        path : 'adminhome',
        element : <AdminHome></AdminHome>
      },
      {
        path : 'manageclass',
        element : <Manageclass></Manageclass>
      },
      {
        path : 'manageusers',
        element : <ManageUsers></ManageUsers>
      },
      {
        path : 'dashboardhome',
        element : <DashboardHome></DashboardHome>
      },
      {
        path : 'selectedclass',
        element : <SelectedClass></SelectedClass>
      },
      {
        path : 'pay/:id', 
        element : <Pay></Pay> ,
        loader : ({params})=> fetch(`http://localhost:4444/pay/${params.id}`)
        
      },
      {
        path : 'enrolledclass',
        element :<EnrolledClass></EnrolledClass>
      },
      {
        path : 'paymenthistory',
        element : <PaymentHistory></PaymentHistory>
      },
      {
        path : 'addclass',
        element : <AddClass></AddClass>
      },
      {
        path : 'myclasses',
        element : <MyClasses></MyClasses>
      },
     
    ]
  },
]);

export default router