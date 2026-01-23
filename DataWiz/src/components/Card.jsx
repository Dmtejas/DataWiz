const Card = ({heading, content}) => {
    return (
        <div className="bg-white text-black grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-none gap-10 lg:gap-32 items-center p-10 shadow-[24px_12px_48px_rgba(1.5,0,0,0.7)] rounded-2xl transition-all duration-200 hover:scale-105 ease-out max-w-5xl mx-auto mt-2">
            <h1 className="text-5xl font-semibold text-center">{heading}</h1>
            <div>
                 <p className="text-lg italic">{content}</p>
                 <button className="bg-black my-4 px-6 py-3 text-white shadow-2xl rounded-xl font-semibold">Know More</button>
            </div>
           
        </div>
    )
}

export default Card;