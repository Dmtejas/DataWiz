import Header from "../components/Header";
import IndividualDomainCard from "../components/IndividualDomainCard";
import TeamCard from "../components/TeamCard";
import logo from "../assets/logo.jpeg";

//Dummy Team data
const tech_data = [
    {
        image: logo,
        name: "Tech 1",
        description: "Lead",
    },
    {
        image: logo,
        name: "Tech 2",
        description: "Co-Lead",
    },
    {
        image: logo,
        name: "Tech 3",
        description: "Member",
    },
    {
        image: logo,
        name: "Tech 4",
        description: "Member",
    },
    {
        image: logo,
        name: "Tech 5",
        description: "Member",
    },
    {
        image: logo,
        name: "Tech 6",
        description: "Member",
    },
];

const Teams = () => {
    return (
        <div className="">
            <Header />
            <div className="max-w-7xl mx-auto flex flex-col gap-4 justify-center pt-40 text-white">
                <h1 className="text-5xl font-bold">Our Team</h1>
                <p className="text-xl text-gray-400">
                    Behind every initiative of the club is a team driven by
                    curiosity, responsibility, and collaboration. Our structure
                    is designed to ensure leadership clarity while empowering
                    each domain to innovate and execute independently.
                </p>
            </div>
            <div className="">
                <TeamCard />
                <div className="m-10 mt-20">
                    <h1 className="text-4xl font-bold text-white text-center">Tech Team</h1>
                    <IndividualDomainCard heading="Tech" data={tech_data} />

                    <h1 className="text-4xl font-bold text-white text-center">Tech Team</h1>
                    <IndividualDomainCard heading="Tech" data={tech_data} />

                    <h1 className="text-4xl font-bold text-white text-center">Tech Team</h1>
                    <IndividualDomainCard heading="Tech" data={tech_data} />

                    <h1 className="text-4xl font-bold text-white text-center">Tech Team</h1>
                    <IndividualDomainCard heading="Tech" data={tech_data} />

                    <h1 className="text-4xl font-bold text-white text-center">Tech Team</h1>
                    <IndividualDomainCard heading="Tech" data={tech_data} />
                </div>
            </div>
        </div>
    );
};

export default Teams;
