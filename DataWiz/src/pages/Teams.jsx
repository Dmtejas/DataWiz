import Header from "../components/Header";
import IndividualDomainCard from "../components/IndividualDomainCard";
import TeamCard from "../components/TeamCard";
import logo from "../assets/logo.jpeg";
import { useState } from "react";

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
    const [domain, setDomain] = useState('Tech');
    const [underline, setUnderline] = useState(false);


    const renderElements = () => {
        switch(domain) {
            case 'Tech' : 
                return (
                    <IndividualDomainCard heading="Tech" data={tech_data} />
                )
            case 'Design':
                return (
                    <IndividualDomainCard heading="Tech" data={tech_data} />
                ) 
            case 'Media':
                return (
                    <IndividualDomainCard heading="Tech" data={tech_data} />
                ) 
            case 'PR':
                return (
                    <IndividualDomainCard heading="Tech" data={tech_data} />
                ) 
            case 'Documentation':
                return (
                    <IndividualDomainCard heading="Tech" data={tech_data} />
                )              
            case 'Events':
                return (
                    <IndividualDomainCard heading="Tech" data={tech_data} />
                )       
        }
    }

    return (
        <div className="">
            <Header />
            <div className="max-w-7xl mx-auto flex flex-col lg:gap-x-0 gap-x-10 gap-4 justify-center pt-40 p-10 text-white">
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
                    <div className="lg:w-full w-3/4 mx-auto border border-b-white border-t-0 border-r-0 border-l-0 grid grid-cols-1 lg:grid-cols-6 p-2 lg:p-4 gap-x-1 lg:gap-x-2 lg:gap-y-0 gap-y-8 lg:items-center lg:bg-none">
                        <button onClick={() => {
                            setDomain('Tech')
                        }} 
                        
                        className={`
                        lg:text-2xl 
                        text-md 
                        font-bold 
                        ${domain == 'Tech' ? 'lg:bg-transparent shadow-[0_8px_30px_rgba(255,255,255,0.2)] lg:text-white text-black p-2 lg:p-4' : null} 
                        transition-all duration-300 ease-in-out lg:rounded-3xl rounded-xl lg:hover:text-3xl hover:text-xl lg:bg-transparent bg-transparent text-white lg:text-white`}>
        
                            Tech
                        </button>
                        <button onClick={() => {
                            setDomain('Design')
                        }} className={`lg:text-2xl text-md font-bold ${domain == 'Design' ? 'lg:bg-transparent shadow-[0_8px_30px_rgba(255,255,255,0.2)] lg:text-white text-black p-2 lg:p-4' : null} transition-all duration-300 ease-in-out lg:rounded-3xl rounded-xl lg:hover:text-3xl hover:text-xl lg:bg-transparent bg-transparent text-white lg:text-white`}>Design</button>
                        <button onClick={() => {
                            setDomain('Media')
                        }} className={`lg:text-2xl text-md font-bold ${domain == 'Media' ? 'lg:bg-transparent shadow-[0_8px_30px_rgba(255,255,255,0.2)] lg:text-white text-black p-2 lg:p-4' : null} transition-all duration-300 ease-in-out lg:rounded-3xl rounded-xl lg:hover:text-3xl hover:text-xl lg:bg-transparent bg-transparent text-white lg:text-white`}>Media</button>
                        <button onClick={() => {
                            setDomain('PR')
                        }} className={`lg:text-2xl text-md font-bold ${domain == 'PR' ? 'lg:bg-transparent shadow-[0_8px_30px_rgba(255,255,255,0.2)] lg:text-white text-black p-2 lg:p-4' : null} transition-all duration-300 ease-in-out lg:rounded-3xl rounded-xl lg:hover:text-3xl hover:text-xl lg:bg-transparent bg-transparent text-white lg:text-white`}>PR</button>
                        <button onClick={() => {
                            setDomain('Events')
                        }} className={`lg:text-2xl text-md font-bold ${domain == 'Events' ? 'lg:bg-transparent shadow-[0_8px_30px_rgba(255,255,255,0.2)] lg:text-white text-black p-2 lg:p-4' : null} transition-all duration-300 ease-in-out lg:rounded-3xl rounded-xl lg:hover:text-3xl hover:text-xl lg:bg-transparent bg-transparent text-white lg:text-white`}>Events</button>
                        <button onClick={() => {
                            setDomain('Documentation')
                        }} className={`lg:text-2xl text-md font-bold ${domain == 'Documentation' ? 'lg:bg-transparent shadow-[0_8px_30px_rgba(255,255,255,0.2)] lg:text-white text-black p-2 lg:p-4' : null} transition-all duration-300 ease-in-out lg:rounded-3xl rounded-xl lg:hover:text-3xl hover:text-xl lg:bg-transparent bg-transparent text-white lg:text-white`}>Documentation</button>
                    </div>
                    <div>
                        {renderElements()}
                    </div>
                    {/* <h1 className="text-4xl font-bold text-white text-center">Tech Team</h1>
                    <IndividualDomainCard heading="Tech" data={tech_data} />

                    <h1 className="text-4xl font-bold text-white text-center">Tech Team</h1>
                    <IndividualDomainCard heading="Tech" data={tech_data} />

                    <h1 className="text-4xl font-bold text-white text-center">Tech Team</h1>
                    <IndividualDomainCard heading="Tech" data={tech_data} />

                    <h1 className="text-4xl font-bold text-white text-center">Tech Team</h1>
                    <IndividualDomainCard heading="Tech" data={tech_data} />

                    <h1 className="text-4xl font-bold text-white text-center">Tech Team</h1>
                    <IndividualDomainCard heading="Tech" data={tech_data} /> */}
                </div>
            </div>
        </div>
    );
};

export default Teams;
