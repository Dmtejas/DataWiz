const LoginInput = ({ label, name, value, setFormData}) => {

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    return (
        <div className="flex flex-col w-full gap-y-1">
            <label className="text-lg font-serif">{label}</label>
            <input className="
                py-2
                px-2
                bg-transparent
                border-4
                rounded-md
                focus:border-4
            " 
            type="text"
            placeholder="Enter here"
            name={name}
            value={value}
            onChange={handleChange}
            />
        </div>
    );
};

export default LoginInput;
