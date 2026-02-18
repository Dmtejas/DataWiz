import logo from "../assets/logo.jpeg";
import './animation/style.css'

const TeamCard = () => {
    const leaders = [
        {
            image: logo,
            name: "XYZ",
            description: "Club Head",
        },
        {
            image: logo,
            name: "XYZ",
            description: "Club Co-Head",
        },
        {
            image: logo,
            name: "XYZ",
            description: "General Secretary",
        },
    ];

    return (
        <div className="grid lg:grid-cols-3 lg:grid-rows-none grid-cols-1 min-h-40 mt-10 lg:mx-10 text-black lg:w-auto w-full">
            {leaders.map((element, index) => {
                return (
                    <div id="core-members" className="flex flex-col items-center justify-between m-7 p-8 gap-y-10 border-2 border-black hover:scale-110 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] rounded-3xl">
                        <img
                            className="size-56 rounded-full"
                            src={element.image}
                            alt="Photo"
                        />
                        <div className="w-full flex flex-col items-center">
                            <h1 className="text-3xl font-bold">
                                {element.name}
                            </h1>
                            <h1 className="text-2xl font-semibold">
                                {element.description}
                            </h1>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default TeamCard;
