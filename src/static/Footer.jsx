import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const Footer = () => {
    return (
        <div style={{
            backgroundImage: "url('https://i.ibb.co.com/HNL7JGW/13.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }} className="">
            <div className="flex w-4/5 mx-auto pt-16 pb-8 justify-center items-center">
                <div className="space-y-5 w-[60%]">
                    <img className="h-20 w-20" src="https://i.ibb.co.com/Yt8vWVf/logo1.png" alt="" />
                    <h2 className="text-4xl font-rancho">Expresso Emporium</h2>
                    <p className="font-raleway text-base">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                    <div className="flex gap-3 text-2xl">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                    <h3 className="font-rancho text-3xl">Get in Touch</h3>
                    <div className="flex flex-col gap-3">
                        <p className="flex items-center gap-3"><IoMdCall /> 01575306824</p>
                        <p className="flex items-center gap-3"><MdEmail /> ahsanistiaq23@gmail.com</p>
                        <p className="flex items-center gap-3"><FaLocationDot /> Chattogram,Bangladesh</p>
                    </div>
                </div>
                <div className="space-y-3">
                    <h2 className="font-rancho text-3xl">Connect With Us</h2>
                    <input type="text" placeholder="Name" className="input w-full max-w-md" />
                    <input type="text" placeholder="Email" className="input w-full max-w-md" />
                    <input type="text" placeholder="Message" className="input w-full py-20 max-w-md" />

                </div>
            </div>
        </div>
    );
};

export default Footer;
