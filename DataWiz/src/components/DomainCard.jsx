import { motion } from "framer-motion";

const DomainCard = ({ data }) => {
    const renderElements = (element, index) => {
        const renderedElement = <motion.div variants={{
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
                    viewport={{ once: true, margin: "-300px" }} className="bg-transparent text-white p-5 lg:p-10 w-full text-center flex flex-col gap-y-2 lg:gap-y-10 transition-all lg:justify-between duration-200 hover:scale-105 ease-out shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)] rounded-3xl">
            <h1 className="lg:text-3xl font-bold text-center text-2xl">{element.title}</h1>
            <p className="text-center">{element.description}</p>
        </motion.div>

        return renderedElement;
    }
    return (
        <div>
            <div className="text-black grid lg:grid-cols-3 lg:grid-rows-none grid-cols-1 gap-10 items-stretch lg:p-20 p-5 shadow-[0_8px_30px_rgba(255,255,255,0.2)] rounded-2xl w-full">
                {
                    data.map((element, index) => {
                        return renderElements(element, index);
                    })
                }
            </div>
        </div>
    );
};

export default DomainCard;
