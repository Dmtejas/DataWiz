import EventCard from "../components/EventCard";
import Header from "../components/Header";

const data = [
  {
    "id": 1,
    "title": "Odoo x NMIT Hackathon",
    "description": "Annual flagship hackathon focused on ERP and real-world business systems.",
    "date": "2025-03-15",
    "year": 2025,
    "status": "upcoming",
    "type": "hackathon",
    "isFlagship": true,
    "registrationOpen": true
  },
  {
    "id": 2,
    "title": "Data Science Bootcamp",
    "description": "Hands-on workshop covering data analysis and foundational machine learning concepts.",
    "date": "2024-11-20",
    "year": 2024,
    "status": "past",
    "type": "workshop",
    "isFlagship": false,
    "registrationOpen": false
  },
  {
    "id": 3,
    "title": "Web Development Hackathon",
    "description": "Problem-solving coding event focused on full-stack web development.",
    "date": "2024-09-10",
    "year": 2024,
    "status": "past",
    "type": "hackathon",
    "isFlagship": false,
    "registrationOpen": false
  },
  {
    "id": 4,
    "title": "AI & Data Analytics Talk",
    "description": "Technical talk discussing real-world applications of AI and data analytics.",
    "date": "2025-02-05",
    "year": 2025,
    "status": "upcoming",
    "type": "talk",
    "isFlagship": false,
    "registrationOpen": true
  },
  {
    "id": 5,
    "title": "Open Source Contribution Sprint",
    "description": "Collaborative sprint focused on contributing to open-source projects.",
    "date": "2024-06-18",
    "year": 2024,
    "status": "past",
    "type": "project",
    "isFlagship": false,
    "registrationOpen": false
  }
]

const Events = () => {
    return (
        <div id="teamsPage" className="">
            <Header />
            <div className="max-w-5xl mx-auto text-center pt-20 p-6">
                <h1 className="text-white text-5xl font-bold">Events</h1>
                <p className="mt-4 text-gray-500 text-2xl italic">Hackathons, workshops, and technical initiatives by DataWiz</p>
            </div>
            <div className="m-4 p-10 shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] rounded-3xl ">
                <EventCard data={data} heading="Upcoming Events"/>
            </div>
            <div className="m-4 p-10 shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] rounded-3xl ">
                <EventCard data={data} heading="Past Events"/>
            </div>
        </div>
    );
};

export default Events;
