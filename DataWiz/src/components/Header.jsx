import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Header = () => {
    const navigate = useNavigate();
    return (
        <div className="fixed z-30 w-full py-1 flex justify-between px-7 bg-white text-black border border-b-black border-t-0 border-r-0 border-l-0 shadow-2xl text-xl items-center">
            <div className="flex items-center">
                <img className="size-14 rounded-full animate-spin [animation-duration:4s]" src={logo} alt="Logo" />
                <h1 className="font-thin text-black bg-transparent p-2">
                    DataWiz, NMIT
                </h1>
            </div>

            <div className="flex space-x-9 text-black">
                <button className="transition-all duration-150 rounded-2xl hover:border-4 hover:border-black px-4" onClick={() => {navigate('/home')}}>Home</button>
                <button className="transition-all ease-in-out duration-150 rounded-2xl hover:border-4 hover:border-black px-4" onClick={() => {navigate('/home/events')}}>About Us</button>
                <button className="transition-all ease-in-out duration-150 rounded-2xl hover:border-4 hover:border-black px-4" onClick={() => {navigate('/home/events')}}>Events</button>
            </div>
        </div>
    );
};

export default Header;
