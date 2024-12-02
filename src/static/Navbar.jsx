import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={{
            backgroundImage: "url('https://i.ibb.co.com/2jCfB4m/15.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} className="bg-transparent fixed w-full top-0 z-50 text-center flex justify-center items-center py-1">
            <img className="h-10 w-10" src="https://i.ibb.co.com/Yt8vWVf/logo1.png" alt="" />
            <Link to="/" className="text-2xl text-white font-rancho">Expresso Emporium</Link>
        </div>
    );
};

export default Navbar;