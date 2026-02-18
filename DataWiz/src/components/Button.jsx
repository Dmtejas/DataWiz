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
            
        }} className="bg-transparent border-2 border-black text-black font-semibold text-md lg:text-xl transition-all duration-150 hover:scale-105 lg:px-32 py-2 rounded-md">{button_name}</button>
    )
}

export default Button;