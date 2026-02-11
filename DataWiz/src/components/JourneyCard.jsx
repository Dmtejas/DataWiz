const JourneyCard = ({ content }) => {
    return (
        <div className=" text-white">
            {content.map((element, index) => {
                return (
                    <div className="p-4 m-2 shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] text-xl rounded-2xl text-center">
                        <p>{element.title}</p>
                        <p>{element.date}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default JourneyCard;
