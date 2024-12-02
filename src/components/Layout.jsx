import { Outlet } from "react-router-dom";
import Navbar from "../static/Navbar";
import Footer from "../static/Footer";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;