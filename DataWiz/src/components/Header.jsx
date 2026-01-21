const Header = () => {
    return (
        <div className="realtive z-20 w-full py-5 flex justify-evenly px-7 border border-b-2 border-black text-black text-xl mt-4">
            <h1 className="font-semibold font-mono">DataWiz</h1>
            <div className="flex space-x-9 text-slate-950">
                <button>Home</button>
                <button>About Us</button>
                <button>Events</button>
            </div>
        </div>
    )
}

export default Header;