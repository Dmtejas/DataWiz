const InputForForm = ({value, name, placeholder, type, label, handleChange}) => {
    return (
        <div className="flex flex-col mb-6 w-full lg:w-3/4 mx-auto text-black">
             <label className="mb-2 text-xl font-thin">{label}</label>  
             <input className="bg-transparent border-2 border-black py-3 px-2 rounded-lg w-full lg:w-full transition-all duration-300 hover:scale-105" type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange} required />
            
        </div>
       
    )
}

export default InputForForm