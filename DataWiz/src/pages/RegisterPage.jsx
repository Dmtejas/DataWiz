import { useState } from "react"
import Header from "../components/Header"
import InputForForm from "../components/InputForForm"
import { useParams } from "react-router-dom"

const initialState = {
    event: '',
    name: '',
    USN: '',
    department: '',
    semester: '',
    email: '',
    number: ''
}

const RegisterPage = () => {
    const [formData, setFormData] = useState(initialState)
    const [status, setStatus] = useState('');
    const params = useParams()

    const sendData = async () => {
        try {
            const apiResponse = await fetch('/api/registrations', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if(!apiResponse) {
                setStatus(`Error in sending the data`);
                console.log("Error posting the data");
            } else {
                const data = await apiResponse.json();
                console.log(data);
                if(!data) {
                    setStatus(`Error in sending data, Try Again Later`)
                    return
                }
                setStatus(`Successfully collected the data`)
            }

        } catch(err) {
            console.log(err);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setFormData((prevData) => {
            return {
                ...prevData,
                event: params.id
            }
        })

        //Sending the data to Backend
        sendData();

        console.log(formData)
    }

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const handleClick = () => {
        setFormData((prevData) => {
            return {
                ...prevData,
                event: params.id
            }
        })
    }

    return (
        <div id="teamsPage">
            <Header />
           <h1 className="text-center pt-20 lg:pt-40 text-3xl lg:text-5xl font-serif font-semibold">Enter your details: </h1> 
           <form onSubmit={handleSubmit} className="shadow-[0_8px_30px_rgba(255,255,255,0.2)] max-w-xs lg:max-w-4xl mx-auto mt-6 p-6 lg:p-10 flex flex-col rounded-2xl lg:rounded-[50px] border-2 lg:border-8 bg-black">
                
                <InputForForm value={formData.name} name="name" placeholder="Enter here" type="text" label="Name: " handleChange={handleChange}/>

                <InputForForm value={formData.USN} name="USN" placeholder="Enter here" type="text" label="USN: " handleChange={handleChange} />

                <InputForForm value={formData.department} name="department" placeholder="Enter here" type="text" label="Department: " handleChange={handleChange}/>

                <InputForForm value={formData.semester} name="semester" placeholder="Enter here" type="text" label="Semester: "   handleChange={handleChange}/>

                <InputForForm value={formData.email} name="email" placeholder="Enter here" type="email" label="E-mail: "  handleChange={handleChange}/>

                <InputForForm value={formData.number} name="number" placeholder="Enter here" type="text" label="Phone Number: "  handleChange={handleChange}/>

                <button type="submit" onClick={handleClick} className="rounded-xl bg-white text-black text-md lg:text-lg font-bold py-2 lg:py-3 px-10 mx-auto my-5 transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white">Submit details</button>  
                <p className="text-md lg:text-xl text-white font-semibold text-center">{status}</p>   
            </form> 
        </div>
    )
}

export default RegisterPage