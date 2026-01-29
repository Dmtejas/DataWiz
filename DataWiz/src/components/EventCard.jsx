import { useNavigate } from 'react-router-dom';
import './animation/style.css'

const EventCard = ({ data, heading }) => {
    const navigate = useNavigate()
    const renderElements = (element, index) => {
        const renderedElement = (
            <div id="core-members" className="flex flex-col items-center justify-between text-white mx-auto text-center bg-transparent shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] w-full p-4 gap-y-4 min-h-64 rounded-se-[65px] transition-all hover:scale-105 duration-150 ease-linear">
                <h1 className="text-2xl font-semibold">{element.title}</h1>
                <p className="text-lg italic text-gray-300">{element.description}</p>
                <p>Date - {element.date}</p>
                <button onClick={() => navigate(`/Register/${element.title}`)} className="bg-white px-24 py-3 rounded-xl shadow-2xl font-semibold text-black text-xl hover:scale-110 transition-all duration-150 hover:bg-black hover:text-white">Register</button>
            </div>
        );

        return renderedElement;
    };
    return (
        <div>
            <h1 className="w-full ml-0 lg:ml-8 mx-auto text-center lg:text-start text-white text-4xl font-bold mb-8">{heading}</h1>
            <div className="grid grid-cols-1 m-2 items-stretch gap-x-4 gap-y-4">
                {data.map((element, index) => {
                    return renderElements(element, index);
                })}
            </div>
        </div>
    );
};

export default EventCard;
