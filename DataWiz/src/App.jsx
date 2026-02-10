import { useContext } from "react";
import Loading from "./components/Loading";
import Events from "./pages/Events";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Teams from "./pages/Teams";
import { Router, useRoutes } from "react-router-dom";
import { MyContext } from "./context/LoadingContext";
import RegisterPage from "./pages/RegisterPage";
import AdminLogin from "./pages/adminLogin.jsx";
import RegistrationDetails from "./pages/RegistrationDetails";
import Unauthorized from "./components/Unauthorized";
export default function App() {
    const {loading, setLoading} = useContext(MyContext)
    const { button, path } = loading;
    console.log(`Button : ${button} Path : ${path}`);
    
    const CustomRoutehandler = () => {
        const routes = useRoutes([
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/events",
                element: <Events />,
            },
            {
                path: "/Teams",
                element: <Teams />
            },
            {
                path: "/Loading",
                element: <Loading />
            },
            {
                path: "/Register/:id",
                element: <RegisterPage />
            },
            {
                path: "/admin-datawiz",
                element: <AdminLogin />
            },
            {
                path: "/dashboard",
                element: <RegistrationDetails />
            },
            {
                path: "/unauthorized",
                element: <Unauthorized />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]);

        return routes;
    };
    
    return (
        <div>
            {
                button ? <Loading /> : <CustomRoutehandler />
            }
            
        </div>
    );
}
