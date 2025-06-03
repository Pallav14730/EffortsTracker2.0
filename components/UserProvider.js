
"use client";
import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

const UserProvider = ({children} ) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userName = localStorage.getItem('username');
        if (userName) {
            setUser({ username: userName });
        }
      }, [])
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}
export default UserProvider;
