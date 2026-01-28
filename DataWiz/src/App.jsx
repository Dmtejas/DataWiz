import { useContext } from "react";
import Loading from "./components/Loading";
import Events from "./pages/Events";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import Teams from "./pages/Teams";
import { Router, useRoutes } from "react-router-dom";
import { MyContext } from "./context/LoadingContext";
export default function App() {
    const {loading, setLoading} = useContext(MyContext)
    const { button, path } = loading;
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
