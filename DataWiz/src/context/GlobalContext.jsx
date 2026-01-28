import { createContext, useContext, useState } from "react";
import { MyContext } from './LoadingContext'

const initialValue = {
    button: false,
    path: ''
}

const GlobalContext = ({children}) => {

    const [loading, setLoading] = useState(initialValue);

    const value = {
        loading,
        setLoading
    }

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    )
}

export default GlobalContext;