import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footar from "../../Pages/Shared/Footar/Footar";
import './Main.css'

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footar></Footar>
        </div>
    );
};

export default Main;