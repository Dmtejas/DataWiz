import Header from "./Header";
import unauthorized from "../assets/unauthorized.jpg";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen">
            <Header />
            <div className="max-w-xs lg:max-w-5xl mx-auto pt-32 pb-20 flex items-center gap-x-8">
                <img
                    className="size-2/4 mx-auto rounded-full"
                    src={unauthorized}
                    alt="Unauthorized"
                />
                <div className="my-10 text-center min-h-48 flex flex-col gap-y-5 items-center">
                    <h1 className="text-5xl font-black">Unauthorized Access</h1>
                    <p className="w-3/4 text-center font-serif">
                        You do not have permission to view this page. The
                        resource you’re trying to access is restricted and
                        requires valid authentication or higher access
                        privileges.
                    </p>
                    <button onClick={() => navigate('/')} className="w-1/3 py-2 rounded-2xl bg-white text-black shadow-2xl hover:scale-110 transition-all duration-300 hover:bg-black hover:text-white font-semibold">
                        Back to home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Unauthorized;
