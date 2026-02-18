import { useNavigate } from "react-router-dom";
import logo from "../assets/nitte_logo_1.png";
import { useContext, useState } from "react";
import hamburger from "../assets/hamburger.png";
import { MyContext } from "../context/LoadingContext";

const Header = () => {
    const { loading, setLoading } = useContext(MyContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    return (
        <div className=" z-30 w-full lg:py-1 py-1 flex justify-between px-7 bg-transparent text-black text-sm lg:text-xl items-center border-2 border-t-0 border-l-0 border-r-0 border-black bg-white">
            <div className="flex items-center">
                <img
                    className="lg:size-20 lg:h-16 rounded-xl size-8 animate-none [animation-duration:4s]"
                    src={logo}
                    alt="Logo"
                />
                {/* <h1 className="font-normal bg-transparent p-2 lg:text-lg text-xs">
                    DATAWIZ, NMIT
                </h1> */}
            </div>
            <div className="">
                <button
                    className="md:hidden flex bg-transparent justify-end"
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    <img className=" bg-black rounded-xl w-10" src={hamburger} alt="hamburger" />
                </button>
                {
                    <div
                        className={`absolute flex flex-col font-semibold bg-transparent items-start  -translate-x-4 gap-y-4 transition-all duration-200 rounded-xl border-2
                    ${show ? "opacity-100 traslate-y-8 mt-2 p-2" : "opacity-0 translate-y-0 pointer-events-none"}
                    `}
                    >
                        <button
                            className="transition-all duration-150 rounded-2xl hover:border-4 ease-in-out hover:border-white px-4"
                            onClick={() => {
                                navigate("/");
                                setLoading((prev) => {
                                    return {
                                        button: true,
                                        path: "/",
                                    };
                                });
                            }}
                        >
                            Home
                        </button>
                        <button
                            className="transition-all ease-in-out duration-150 rounded-2xl hover:border-4 hover:border-white px-4"
                            onClick={() => {
                                navigate("/Teams");
                                setLoading((prev) => {
                                    return {
                                        button: true,
                                        path: "Teams",
                                    };
                                });
                            }}
                        >
                            About Us
                        </button>
                        <button
                            className="transition-all ease-in-out duration-150 rounded-2xl hover:border-4 hover:border-white px-4"
                            onClick={() => {
                                navigate("/events");
                                setLoading((prev) => {
                                    return {
                                        button: true,
                                        path: "events",
                                    };
                                });
                            }}
                        >
                            Events
                        </button>
                    </div>
                }
            </div>
            <div className="hidden md:flex space-x-9 font-normal lg:text-xl text-black">
                <button
                    className="transition-all duration-150 rounded-2xl hover:border-2 ease-in-out hover:border-black px-4"
                    onClick={() => {
                        navigate("/");
                        setLoading((prev) => {
                            return {
                                button: true,
                                path: "/",
                            };
                        });
                    }}
                >
                    HOME
                </button>
                <button
                    className="transition-all ease-in-out duration-150 rounded-2xl hover:border-2 hover:border-black px-4"
                    onClick={() => {
                        navigate("/Teams");
                        setLoading((prev) => {
                            return {
                                button: true,
                                path: "Teams",
                            };
                        });
                    }}
                >
                    ABOUT US
                </button>
                <button
                    className="transition-all ease-in-out duration-150 rounded-2xl hover:border-2 hover:border-black px-4"
                    onClick={() => {
                        navigate("/events");
                        setLoading((prev) => {
                            return {
                                button: true,
                                path: "events",
                            };
                        });
                    }}
                >
                    EVENTS
                </button>
            </div>
            {/* <div className="hidden md:flex space-x-9 font-semibold">
                <button className="transition-all duration-150 rounded-2xl hover:border-4 ease-in-out hover:border-white px-4" onClick={() => {navigate('/')}}>Home</button>
                <button className="transition-all ease-in-out duration-150 rounded-2xl hover:border-4 hover:border-white px-4" onClick={() => {navigate('/Teams')}}>About Us</button>
                <button className="transition-all ease-in-out duration-150 rounded-2xl hover:border-4 hover:border-white px-4" onClick={() => {navigate('/events')}}>Events</button>
            </div> */}
        </div>
    );
};

export default Header;
