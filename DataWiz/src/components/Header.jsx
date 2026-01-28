import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { useContext, useState } from "react";
import hamburger from "../assets/hamburger.png";
import { MyContext } from "../context/LoadingContext";

const Header = () => {
    const { loading, setLoading } = useContext(MyContext);
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    return (
        <div className="fixed z-30 w-full lg:py-3 py-1 flex justify-between px-7 bg-[#160585] text-white border border-b-white  border-t-0 border-r-0 border-l-0 text-sm lg:text-xl items-center">
            <div className="flex items-center">
                <img
                    className="lg:size-14 size-8 rounded-full animate-none [animation-duration:4s]"
                    src={logo}
                    alt="Logo"
                />
                <h1 className="font-bold bg-transparent p-2 lg:text-lg text-xs">
                    DATAWIZ, NMIT
                </h1>
            </div>
            <div className="">
                <button
                    className="md:hidden flex bg-transparent justify-end"
                    onClick={() => {
                        setShow(!show);
                    }}
                >
                    <img className="w-12" src={hamburger} alt="hamburger" />
                </button>
                {console.log(show)}
                {
                    <div
                        className={`absolute flex flex-col font-semibold bg-[#160585] items-start  -translate-x-4 gap-y-4 transition-all duration-200 rounded-xl border
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
                {console.log(show)}
            </div>
            <div className="hidden md:flex space-x-9 font-semibold">
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
            {/* <div className="hidden md:flex space-x-9 font-semibold">
                <button className="transition-all duration-150 rounded-2xl hover:border-4 ease-in-out hover:border-white px-4" onClick={() => {navigate('/')}}>Home</button>
                <button className="transition-all ease-in-out duration-150 rounded-2xl hover:border-4 hover:border-white px-4" onClick={() => {navigate('/Teams')}}>About Us</button>
                <button className="transition-all ease-in-out duration-150 rounded-2xl hover:border-4 hover:border-white px-4" onClick={() => {navigate('/events')}}>Events</button>
            </div> */}
        </div>
    );
};

export default Header;
