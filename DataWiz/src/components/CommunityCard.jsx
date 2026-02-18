import { useNavigate } from "react-router-dom";

const CommunityCard = ({heading, content, button, url}) => {
    const navigate = useNavigate();
    return (
        <div className="bg-transparent rounded-xl transition-all duration-200 ease-in-out hover:scale-105 border-2 border-black items-start justify-between p-10 flex flex-col space-y-2 lg:space-y-6 text-black bg-white">
            <h1 className="lg:text-3xl text-xl font-bold">{heading}</h1>
            <p className="italic lg:text-xl text-md">{content}</p>
            <button className="bg-purple-800 px-16 lg:py-3 py-2 lg:text-lg text-md text-white font-semibold transition-all duration-200 ease-in-out hover:scale-105 rounded-3xl" onClick={() => {navigate(url)}}>{button}</button>
        </div>
    )
}

export default CommunityCard;