const JourneyCard = ({ content }) => {
    return (
        <div className=" text-black ">
            {content.map((element, index) => {
                return (
                    <div className="p-4 m-2 border border-black text-xl rounded-2xl text-center bg-white">
                        <p>{element.title}</p>
                        <p>{element.date}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default JourneyCard;
