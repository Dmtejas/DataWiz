import { useContext, useEffect } from 'react'
import logo from '../assets/logo.jpeg'
import './animation/style.css'
import { MyContext } from '../context/LoadingContext'
import { useNavigate } from 'react-router-dom'

const Loading = () => {
    const navigate = useNavigate()
    const {loading, setLoading} = useContext(MyContext);
    const {button, path} = loading
    console.log(path)
    useEffect(() => {
        setTimeout(() => {
            setLoading((prev) => {
                return {
                    ...prev,
                    button: false
                }
            })
            navigate(`/${path}`)
        }, 1500)
    }, [])

    return (
        <div className="bg-black/70 min-h-screen">
            <div className="max-w-3xl mx-auto flex justify-center pt-52">
            <img id="image" className="size-1/4 backdrop-blur-2xl rounded-full" src={logo} alt="logo" />
        </div>
        </div>
        
    )
}

export default Loading
