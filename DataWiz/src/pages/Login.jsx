import { useContext, useState } from "react";
import Header from "../components/Header";
import LoginInput from "../components/LoginInput";
import GlobalContext from "../context/GlobalContext";
import RegistrationDetails from "./RegistrationDetails";
import { MyContext } from "../context/LoadingContext";
import admin from '../assets/admin.png'

const initialFormData = {
    email: "",
    password: "",
};

const Login = () => {
    const { loading, setLoading } = useContext(MyContext);
    const { button, path } = loading;
    const [formData, setFormData] = useState(initialFormData);
    const [jwt, setJwt] = useState("");
    const [error, setError] = useState(false);
    const formDataSubmit = async () => {
        const apiResponse = await fetch("/api/admin/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!apiResponse.ok) {
            setError(true);
            console.log("Api response is not ok");
        }

        const jwtToken = await apiResponse.json();
        setJwt(jwtToken);
        console.log(jwtToken);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(formData);

        formDataSubmit();

        const resolveError = () => {
            if (error) {
                return "dashboard";
            } else {
                return "unauthorized";
            }
        };

        setLoading((prevData) => {
            return {
                ...prevData,
                button: true,
                path: resolveError(),
            };
        });
    };

    return (
        <div className="min-h-screen">
            <Header />
            <div className="max-w-xs lg:max-w-6xl mx-auto py-20 lg:py-20">
                <form
                    className="bg-transparent shadow-[24px_12px_48px_rgba(255,255,255,0.2)] p-4 lg:p-28 flex lg:flex-row flex-col items-center gap-y-8 lg:gap-x-20 lg:rounded-3xl lg:justify-center border"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-col items-center justify-center w-full gap-y-5">
                        <img src={admin} className="rounded-full" alt="" />
                        <h1 className="text-4xl font-light text-center ">Admin Control Center</h1>
                        <p className="text-center font-thin">Access the dashboard to manage data, monitor activity, and maintain system integrity</p>
                    </div>
                    
                    <div className="flex flex-col gap-y-6 items-center border py-20 p-8 lg:p-20 rounded-2xl w-full bg-sky-600">
                        <LoginInput
                            label="Email : "
                            name="email"
                            value={formData.email}
                            setFormData={setFormData}
                        />
                        <LoginInput
                            label="Password : "
                            name="password"
                            value={formData.password}
                            setFormData={setFormData}
                        />
                        <button
                            className="
                    w-1/2
                    py-2
                    rounded-2xl
                    bg-white
                    text-black
                    font-light
                    text-md
                    hover:scale-110
                    transition-all
                    duration-200
                    hover:bg-black
                    hover:text-white
                "
                            type="/submit"
                        >
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
