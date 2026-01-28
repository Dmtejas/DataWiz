import BottomWave from "../components/BottomWave";
import Button from "../components/Button";
import Header from "../components/Header";
import Wave from "../components/wave";
import Card from "../components/Card";
import logo from "../assets/logo.jpeg";
import group_photo from "../assets/group_photo.jpg";
import JourneyCard from "../components/JourneyCard";
import DomainCard from "../components/DomainCard";
import CommunityCard from "../components/CommunityCard";
import underline from "../assets/underline.png";
import { useContext } from "react";
import {MyContext} from "../context/LoadingContext";

const content = [
    {
        title: "Inaugration ceremony and tech talk",
        date: "21st March 2025",
    },
    {
        title: "Recruitment Phase -1",
        date: " 9th may 2025",
    },
    {
        title: "Event - Global fabric day at Microsoft office Bangalore",
        date: "31st may 2025",
    },
    {
        title: "Event - Odoo x NMIT Hackathon ",
        date: "20-21 September 2025",
    },
    {
        title: "Recruitment Phase 2",
        date: "13 October 2025",
    },
    {
        title: "Orientation program ",
        date: "28 October 2025",
    },
];

const domainData = [
    {
        title: "Tech",
        description:
            "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration",
    },
    {
        title: "Documentation",
        description:
            "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration",
    },
    {
        title: "Design",
        description:
            "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration",
    },
    {
        title: "Media",
        description:
            "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration",
    },
    {
        title: "Public Relation",
        description:
            "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration",
    },
    {
        title: "Events",
        description:
            "Building cutting-edge solutions, organizing workshops, and driving technical excellence through innovation and collaboration",
    },
];

const LandingPage = () => {
    const { loading, setLoading } = useContext(MyContext)
    const { button, path } = loading
    console.log(`Button : ${button}`)
    return (
        <div id="teamsPage" className="relative min-h-screen">
            {/* <div className="mb-24 z-10">
                <Wave />
            </div> */}
            <Header />
            <main className="mx-auto lg:max-w-7xl">
                <div className="max-w-7xl mx-auto pt-40 p-10 flex flex-col space-y-7 z-0 items-center lg:items-start">
                    <div>
                        <h1 id="core-members" className="text-white text-5xl lg:text-7xl font-black lg:text-start text-center">
                            <span className="">
                                DATAWIZ{" "}
                                <span className="text-[#c3c0da]">FAMILY</span>
                            </span>
                        </h1>
                        <img
                            className="size-1/3 lg:mx-0 mx-auto"
                            src={underline}
                            alt="underline"
                        />
                    </div>

                    <div className="">
                        <img
                            className="max-w-40 mt-2 rounded-full"
                            src={logo}
                            alt="logo"
                        />
                    </div>
                    <p className="text-xl italic animate-bounce text-white">
                        Discover, Analyze, Conquer
                    </p>
                </div>
                <div className="z-20 bg-transparent max-w-6xl lg:max-w-7xl mx-auto hover:scale-105 transition-all duration-200 text-white rounded-3xl shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] p-10 flex lg:flex-row flex-col gap-y-2 mt-8">
                    <div className="lg:w-1/2 w-full flex flex-col justify-center lg:items-start items-center space-y-2">
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
                    <div className="flex flex-col mx-auto gap-y-5 lg:mt-0 mt-5 lg:w-auto w-full">
                        <Button button_name="Events" pathName="events" />
                        <Button button_name="Team" pathName="Teams" />
                        <Button button_name="Gallery" />
                    </div>
                </div>
                <div className="m-10 max-w-7xl mx-auto flex items-center justify-center shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]">
                    <img
                        className="size-2/3 m-10 rounded-e-3xl"
                        src={group_photo}
                        alt="Group photo"
                    />
                </div>
                <div className="relative flex flex-col mt-10 p-10 rounded-2xl max-w-screen-2xl mx-auto space-y-8 bg-transparent">
                    <h1 className="ml-3 text-center text-5xl font-semibold text-white">
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
                    <h1 className="ml-3 text-5xl font-semibold text-white text-center">
                        Domains
                    </h1>
                    <DomainCard data={domainData} />
                </div>
                <div className="max-w-md lg:max-w-7xl mx-auto m-14 text-white flex lg:flex-row flex-col justify-center items-center lg:space-x-28 shadow-[0_8px_30px_rgba(255,255,255,0.2)] lg:p-20 p-10 lg:rounded-s-full gap-y-10 lg:gap-y-0">
                    <h1 className="lg:text-6xl text-3xl font-bold">Our Journey ➨</h1>
                    <div className="shadow-[0_8px_30px_rgba(255,255,255,0.2)] p-10 lg:p-20 rounded-e-3xl flex flex-col space-y-5 transition-all duration-150 hover:scale-105 w-full">
                        <JourneyCard content={content} />
                    </div>
                </div>
                <div className="text-black">
                    <h1 className="lg:text-5xl text-3xl mx-2 lg:mx-0 text-center font-bold ml-0 lg:ml-10 text-white">
                        Join Our Community
                    </h1>
                    <div className="grid lg:grid-cols-2 lg:grid-rows-none grid-cols-1 gap-20 mx-10 mt-5 mb-10">
                        <CommunityCard
                            heading="Instagram"
                            content="Stay connected with DataWiz for updates on hackathons, workshops, events, and technical initiatives. Follow us to see what we build, learn, and explore as a community."
                            button="Follow Us"
                            url="https://www.instagram.com/datawiz_nmit"
                        />
                        <CommunityCard
                            heading="LinkedIn"
                            content="Join DataWiz on LinkedIn to stay informed about our technical events, flagship hackathons, workshops, and community initiatives. Follow us for updates, insights, and opportunities to learn and collaborate."
                            button="Connect With Us"
                            url="https://www.linkedin.com/company/datawiznmit/"
                        />
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
