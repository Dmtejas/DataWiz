import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/nitte_logo_1.png";
import { useContext, useState } from "react";
import hamburger from "../assets/hamburger.png";
import { MyContext } from "../context/LoadingContext";
import {FiMenu} from 'react-icons/fi'

const Header = () => {

  const currentPath = useLocation();
  console.log('Current Path : ', currentPath)
  const { loading, setLoading } = useContext(MyContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <div className=" z-30 w-full lg:py-4 py-1 flex justify-between px-10 bg-transparent text-white text-sm lg:text-xl items-center">
      <div className="flex items-center">
        {/* <img
          className="lg:size-20 lg:h-16 rounded-xl size-8 animate-none [animation-duration:4s]"
          src={logo}
          alt="Logo"
        /> */}
        <h1 className="font-black bg-transparent p-2 lg:text-lg text-xs">
          DATAWIZ, NMIT
        </h1>
      </div>
      <div className="lg:py-5 py-5 ">
        <button
          className="md:hidden flex bg-transparent justify-end"
          onClick={() => {
            setShow(!show);
          }}
        >
          {/* <img
            className=" bg-black rounded-xl w-10"
            src={hamburger}
            alt="hamburger"
          /> */}
          <FiMenu className="size-7" />
        </button>
        {
          <div
            className={`absolute z-10 flex flex-col justify-between font-semibold bg-white text-black items-center  -translate-x-20 w-36 h-36 py-5 transition-all duration-200 rounded-md
                    ${show ? "opacity-100 traslate-x-0 mt-2" : "opacity-0 translate-x-full pointer-events-none"}
                    `}
          >
            <button
              className={` ${currentPath.pathname === '/' ? "bg-black text-white" : null} transition-all duration-150 py-1 hover:border-4 ease-in-out hover:border-white px-9 rounded-md`}
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
              className={` ${currentPath.pathname === '/Teams' ? "bg-black text-white" : null} transition-all duration-150 py-1 hover:border-4 ease-in-out hover:border-white px-9 rounded-md`}
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
              className={` ${currentPath.pathname === '/events' ? "bg-black text-white" : null} transition-all duration-150 py-1 hover:border-4 ease-in-out hover:border-white px-9 rounded-md`}
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
      <div className="hidden md:flex gap-x-10 font-bold lg:text-xl text-white pt-5">
        <button
          className={` ${currentPath.pathname === '/' ? "border-2 border-t-0 border-l-0 border-r-0" : null} transition-all duration-150 px-4 py-1`}
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
          className={` ${currentPath.pathname === '/Teams' ? "border-2 border-t-0 border-l-0 border-r-0" : null} transition-all ease-in-out duration-150  px-4`}
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
          className={` ${currentPath.pathname === '/events' ? "border-2 border-t-0 border-l-0 border-r-0" : null} transition-all ease-in-out duration-150  px-4`}
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
