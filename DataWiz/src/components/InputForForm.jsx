const InputForForm = ({value, name, placeholder, type, label, handleChange}) => {
    return (
        <div className="flex flex-col mb-6 w-full lg:w-3/4 mx-auto">
             <label className="mb-2 text-xl font-thin">{label}</label>  
             <input className="bg-transparent shadow-[0_8px_30px_rgba(255,255,255,0.2)] py-3 px-2 rounded-lg w-full lg:w-full transition-all duration-300 hover:scale-105 border" type={type} name={name} value={value} placeholder={placeholder} onChange={handleChange} />
            
        </div>
       
    )
}

export default InputForForm