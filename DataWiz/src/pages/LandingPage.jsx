import BottomWave from "../components/BottomWave";
import Button from "../components/Button";
import Header from "../components/Header";
import Wave from "../components/wave";
import Card from "../components/Card";
import logo from "../assets/logo.png";
import group_photo from "../assets/GroupPhoto.jpeg";
import JourneyCard from "../components/JourneyCard";
import DomainCard from "../components/DomainCard";
import CommunityCard from "../components/CommunityCard";
import underline from "../assets/underline.png";
import { useContext } from "react";
import { MyContext } from "../context/LoadingContext";
import { motion } from "framer-motion";

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
    const { loading, setLoading } = useContext(MyContext);
    const { button, path } = loading;
    console.log(`Button : ${button}`);
    return (
        <div id="teamsPage" className="relative min-h-screen">
            {/* <div className="mb-24 z-10">
                <Wave />
            </div> */}
            <Header />
            <main className="mx-auto lg:max-w-7xl">
                <div className="max-w-7xl mx-auto pt-2 p-4 lg:p-10 lg:pt-0 flex flex-col lg:flex-row lg:space-y-0 z-0 items-center lg:items-center lg:justify-start">
                    <div className="lg:max-w-2xl">
                        <h1
                            id="core-members"
                            className="text-white text-5xl lg:text-[150px] font-black lg:text-start text-center"
                        >
                            <span className="">
                                WE ARE, <br></br>
                                <span className="text-black">DATAWIZ</span>
                            </span>
                        </h1>
                        {/* <img
                            className=" lg:mx-0 mx-auto"
                            src={underline}
                            alt="underline"
                        /> */}
                    </div>

                    <motion.div className="">
                        <img className=" rounded-2xl" src={logo} alt="logo" />
                    </motion.div>
                </div>
                <motion.div
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: 120,
                            rotate: 20,
                            scale: 0.98,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                            rotate: 0,
                            scale: 1,
                            transition: {
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1], // premium easing curve
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-150px" }}
                    className="z-20 bg-white max-w-xs lg:max-w-7xl mx-auto hover:scale-105 duration-200 text-black shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] p-10 flex lg:flex-row flex-col gap-y-2 mt-8"
                >
                    <div className="lg:w-1/2 w-full flex flex-col justify-center lg:items-start items-center space-y-2">
                        <h1 className="text-lg lg:text-2xl font-semibold">
                            ABOUT DATAWIZ
                        </h1>
                        <p className="text-xs lg:text-lg text-center lg:text-start">
                            DataWiz is a technical club focused on data-driven
                            technologies and real-world problem solving.{" "}
                            <span className="">
                                We explore domains like Data Science, Machine
                                Learning, Web Development, and Analytics through
                                hands-on projects, workshops, and events. Our
                                goal is to help students build practical skills
                                beyond the classroom.
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col mx-auto gap-y-2 lg:gap-y-5 lg:mt-0 mt-5 lg:w-auto w-full">
                        <Button button_name="Events" pathName="events" />
                        <Button button_name="Team" pathName="Teams" />
                        <Button button_name="Gallery" />
                    </div>
                </motion.div>
                <div className="m-10 max-w-xs lg:max-w-7xl mx-auto flex items-center justify-center shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)]">
                    <img
                        className="size-3/4 w-full m-2 lg:m-10 lg:rounded-e-3xl"
                        src={group_photo}
                        alt="Group photo"
                    />
                </div>
                <motion.div variants={{
                        hidden: {
                            opacity: 0,
                            x: 120,
                            rotate: 20,
                            scale: 0.98,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                            rotate: 0,
                            scale: 1,
                            transition: {
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1], // premium easing curve
                            },
                        },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-300px" }} className="relative flex flex-col mt-10 p-10 rounded-2xl max-w-screen-2xl mx-auto space-y-8 bg-transparent">
                    <h1 className="ml-3 text-center text-3xl lg:text-5xl font-semibold text-white">
                        Upcoming Events
                    </h1>
                    <div className="flex">
                        <Card
                            heading="Odoo x NMIT"
                            content="Experience a day full of innovation, creativity, and collaboration. Join a community of builders to explore ideas, take on exciting challenges, and showcase your skills in an inspiring environment."
                        />
                    </div>
                </motion.div>
                <div className="relative z-20 flex flex-col mt-10 p-2 lg:p-10 rounded-2xl max-w-screen-2xl mx-auto space-y-8 bg-transparent">
                    <h1 className="ml-3 text-3xl lg:text-5xl font-semibold text-white text-center">
                        Domains
                    </h1>
                    <DomainCard data={domainData} />
                </div>
                <div className="max-w-md lg:max-w-7xl mx-auto m-14 text-white flex lg:flex-row flex-col justify-center items-center lg:space-x-28 shadow-[0_8px_30px_rgba(255,255,255,0.2)] lg:p-20 p-2 lg:rounded-s-full gap-y-10 lg:gap-y-0">
                    <h1 className="lg:text-6xl text-2xl font-bold">
                        Our Journey ➨
                    </h1>
                    <div className="shadow-[0_8px_30px_rgba(255,255,255,0.2)] p-2 lg:p-20 rounded-e-3xl flex flex-col space-y-5 transition-all duration-150 hover:scale-105 w-full">
                        <JourneyCard content={content} />
                    </div>
                </div>
                <div className="text-black">
                    <h1 className="lg:text-5xl text-2xl mx-2 lg:mx-0 text-center font-bold ml-0 lg:ml-10 text-white">
                        Join Our Community
                    </h1>
                    <div className="grid lg:grid-cols-2 lg:grid-rows-none grid-cols-1 lg:gap-20 gap-y-2 mx-10 mt-5 mb-10">
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
