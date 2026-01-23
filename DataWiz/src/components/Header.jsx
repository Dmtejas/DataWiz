import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed z-30 w-full py-3 flex justify-between px-7 bg-[#040959] text-white border border-b-white  border-t-0 border-r-0 border-l-0 text-xl items-center">
            <div className="flex items-center">
                <img className="size-14 rounded-full animate-none [animation-duration:4s]" src={logo} alt="Logo" />
                <h1 className="font-bold bg-transparent p-2">
                    DATAWIZ, NMIT
                </h1>
            </div>

            <div className="flex space-x-9 font-semibold">
                <button className="transition-all duration-150 rounded-2xl hover:border-4 ease-in-out hover:border-white px-4" onClick={() => {navigate('/home')}}>Home</button>
                <button className="transition-all ease-in-out duration-150 rounded-2xl hover:border-4 hover:border-white px-4" onClick={() => {navigate('/home/Teams')}}>About Us</button>
                <button className="transition-all ease-in-out duration-150 rounded-2xl hover:border-4 hover:border-white px-4" onClick={() => {navigate('/home/events')}}>Events</button>
            </div>
        </div>
    );
};

export default Header;
