import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/LoadingContext";

const Button = ({button_name, pathName}) => {
    const {loading, setLoading} = useContext(MyContext)
    const navigate = useNavigate();
    return (
        <button onClick={() => {
            navigate(`/${pathName}`)
            setLoading((prev) => {
                return {
                    button: true,
                    path: pathName
                }
            })
            
        }} className="bg-black shadow-2xl text-white font-semibold text-md lg:text-xl transition-all duration-150 hover:bg-purple-950 hover:text-white hover:scale-105 lg:px-32 py-2 rounded-md">{button_name}</button>
    )
}

export default Button;