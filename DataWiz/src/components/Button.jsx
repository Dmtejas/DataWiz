const Button = ({button_name}) => {
    return (
        <button className="bg-black shadow-2xl text-white font-semibold text-xl transition-all duration-150 hover:bg-black hover:scale-105 px-36 py-2 rounded-md">{button_name}</button>
    )
}

export default Button;