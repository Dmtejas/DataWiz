import BottomWave from "../components/BottomWave";
import Button from "../components/Button";
import Header from "../components/Header";
import Wave from "../components/wave";
import Card from "../components/Card";
import logo from "../assets/logo.jpeg";
import JourneyCard from "../components/JourneyCard";
import DomainCard from "../components/DomainCard";

const content = [
    {
        "title": "Inaugration ceremony and tech talk",
        "date": "21st March 2025"
    },
    {
        "title": "Recruitment Phase -1",
        "date": " 9th may 2025"
    },
    {
        "title": "Event - Global fabric day at Microsoft office Bangalore",
        "date": "31st may 2025"
    },
    {
        "title": "Event - Odoo x NMIT Hackathon ",
        "date": "20-21 September 2025"
    },
    {
        "title": "Recruitment Phase 2",
        "date": "13 October 2025"
    },
    {
        "title": "Orientation program ",
        "date": "28 October 2025"
    },
    
]

const domainData = [
    {
        "title": "Tech",
        "description": "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration"
    },
    {
        "title": "Documentation",
        "description": "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration"
    },
    {
        "title": "Design",
        "description": "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration"
    },
    {
        "title": "Media",
        "description": "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration"
    },
    {
        "title": "Public Relation",
        "description": "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration"
    },
    {
        "title": "Events",
        "description": "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration"
    }
]

const LandingPage = () => {
    return (
        <div className="relative min-h-screen">
            {/* <div className="mb-24 z-10">
                <Wave />
            </div> */}
            <Header />
            <main className="mx-auto">
                <div className="max-w-7xl mx-auto pt-32 p-10 flex flex-col space-y-7 z-0">
                    <h1 className="text-white text-7xl font-black">
                        DATAWIZ <span className="text-blue-600">FAMILY</span>
                    </h1>
                    <div className="">
                        <img
                            className="max-w-40 mt-2 rounded-full "
                            src={logo}
                            alt="logo"
                        />
                    </div>
                    <p className="text-xl italic animate-bounce text-white">
                        Discover, Analyze, Conquer
                    </p>
                </div>
                <div className="relative z-20 bg-transparent max-w-7xl mx-auto hover:scale-105 transition-all duration-200 text-white rounded-3xl shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] p-10 flex space-y-2 mt-8">
                    <div className="w-1/2 flex flex-col justify-center space-y-2">
                        <h1 className="text-2xl font-semibold">
                            ABOUT DATAWIZ
                        </h1>
                        <p className="text-md">
                            DataWiz is a technical club focused on data-driven
                            technologies and real-world problem solving. We
                            explore domains like Data Science, Machine Learning,
                            Web Development, and Analytics through hands-on
                            projects, workshops, and events. Our goal is to help
                            students build practical skills beyond the
                            classroom.
                        </p>
                    </div>
                    <div className="flex flex-col mx-auto space-y-5">
                        <Button button_name="Events" path="events" />
                        <Button button_name="Team" />
                        <Button button_name="Gallery" />
                    </div>
                </div>

                <div className="relative z-20 flex flex-col mt-10 p-10 rounded-2xl max-w-screen-2xl mx-auto space-y-8 bg-transparent">
                    <h1 className="ml-3 text-5xl font-semibold text-white">
                        Upcoming Events
                    </h1>
                    <div className="flex">
                        <Card
                            heading="Odoo x NMIT"
                            content="Experience a day full of innovation, creativity, and collaboration. Join a community of builders to explore ideas, take on exciting challenges, and showcase your skills in an inspiring environment."
                        />
                        
                    </div>
                </div>
                <div className="relative z-20 flex flex-col mt-10 p-10 rounded-2xl max-w-screen-2xl mx-auto space-y-8 bg-transparent">
                    <h1 className="ml-3 text-5xl font-semibold text-white">Domains</h1>
                    <DomainCard data={domainData} />
                </div>
                <div className="max-w-7xl mx-auto m-14 text-white flex justify-center items-center space-x-28 shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] p-20 rounded-s-full border">
                    <h1 className="text-4xl font-bold">Our Journey ➨</h1>
                    <div className="shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] p-20 rounded-e-3xl flex flex-col space-y-5 transition-all duration-150 hover:scale-105 border">
                        <JourneyCard content={content}/>
                    </div>
                </div>
            </main>
            {/* <div className="relative z-10 bottom-[-5rem] left-0 w-full">
                <BottomWave />
            </div> */}
        </div>
    );
};

export default LandingPage;
