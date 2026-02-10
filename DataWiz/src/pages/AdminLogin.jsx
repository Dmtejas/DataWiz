import { useContext, useState } from "react";
import Header from "../components/Header";
import LoginInput from "../components/loginInput";
import GlobalContext from "../context/GlobalContext";
import RegistrationDetails from "./RegistrationDetails";
import { MyContext } from "../context/LoadingContext";

const initialFormData = {
    email: "",
    password: "",
};

const AdminLogin = () => {
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
            if(error) {
                return "dashboard"
            } else {
                return "unauthorized"
            }
        }

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
            <div className="max-w-xs lg:max-w-xl mx-auto py-64 lg:py-28">
                <form
                    className="bg-transparent border-4 shadow-[24px_12px_48px_rgba(255,255,255,0.2)] p-4 lg:p-28 flex flex-col items-center gap-y-8 lg:rounded-full"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-4xl font-serif">ADMIN LOGIN</h1>
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
                    font-semibold
                    font-serif
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
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
