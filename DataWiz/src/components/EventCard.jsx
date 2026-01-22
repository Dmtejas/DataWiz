const EventCard = ({ data, heading }) => {
    const renderElements = (element, index) => {
        const renderedElement = (
            <div className="flex flex-col items-center justify-between text-white max-w-4xl mx-auto text-center bg-transparent shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] w-full p-4 space-y-4 min-h-64 rounded-se-[65px] transition-all hover:scale-105 duration-150 ease-linear">
                <h1 className="text-2xl font-semibold">{element.title}</h1>
                <p className="text-lg italic text-gray-300">{element.description}</p>
                <p>Date - {element.date}</p>
                <button className="bg-white px-24 py-3 rounded-xl shadow-2xl font-semibold text-black text-xl hover:scale-110 transition-all duration-150 hover:bg-black hover:text-white">Register</button>
            </div>
        );

        return renderedElement;
    };
    return (
        <div>
            <h1 className="w-full ml-8 mx-auto text-start text-white text-3xl font-thin mb-8">{heading}</h1>
            <div className="grid grid-cols-2 m-2 items-stretch gap-x-4 gap-y-4">
                {data.map((element, index) => {
                    return renderElements(element, index);
                })}
            </div>
        </div>
    );
};

export default EventCard;
