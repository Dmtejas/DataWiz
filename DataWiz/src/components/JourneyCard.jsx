const JourneyCard = ({ content }) => {
    return (
        <div className=" text-black shadow-[0_8px_30px_rgba(255,255,255,0.2)]">
            {content.map((element, index) => {
                return (
                    <div className="p-4 m-2 shadow-[0_8px_30px_rgba(255,255,255,0.2)] text-xl rounded-2xl text-center bg-white">
                        <p>{element.title}</p>
                        <p>{element.date}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default JourneyCard;
