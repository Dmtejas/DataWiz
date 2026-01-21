import BottomWave from "../components/BottomWave";
import Button from "../components/Button";
import Header from "../components/Header";
import Wave from "../components/wave";

const LandingPage = () => {
    return (
        <div className="bg-white relative min-h-screen">
            {/* <div className="mb-24 z-10">
                <Wave />
            </div> */}
            <Header />
            <main>
                <div className="max-w-7xl mx-auto text-center p-10 flex flex-col space-y-7 z-0">
                    <h1 className="text-black text-7xl font-bold font-serif">
                        WELCOME TO{" "}
                        <span className="italic underline">DATAWIZ</span>
                    </h1>
                    <p className="text-xl italic animate-bounce">Discover Analyze Conquer</p>
                </div>
                <div className="relative z-20 max-w-7xl mx-auto hover:scale-105 transition-all duration-200 text-black rounded-3xl shadow-2xl p-10 flex space-y-2 mt-8">
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
                        <Button button_name="Events" />
                        <Button button_name="Team" />
                        <Button button_name="Gallery" />
                    </div>
                </div>
            </main>
            <div className="absolute z-10 bottom-[-5rem] left-0 w-full">
                <BottomWave />
            </div>
        </div>
    );
};

export default LandingPage;
