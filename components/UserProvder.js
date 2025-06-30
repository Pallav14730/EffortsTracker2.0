

import { useState, createContext, useEffect } from "react"


export const userContext = createContext();


export const UserProvider = ({children}) => {
    const [user,setUser] = useState(null);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        if (storedUsername) {
            setUser({ username: storedUsername });
        }
    },[])

    const logout = () => {
        localStorage.removeItem("username");
        setUser(null);
    }

    return (
        <userContext.Provider value={{user,setUser, logout}}>
            {children}
        </userContext.Provider>
    )
}