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
            <label className="text-lg font-light">{label}</label>
            <input className="
                py-2
                px-2
                bg-transparent
                border
                border-black
                rounded-md
                focus:border-4
                placeholder: text-black
            " 
            type="text"
            placeholder="Enter here"
            name={name}
            value={value}
            onChange={handleChange}
            required
            />
        </div>
    );
};

export default LoginInput;
