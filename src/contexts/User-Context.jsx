import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userLoggedIn, setUserLoggedIn] = useState( { username: "tickle122", votedOnArticle: [] } )

    return (
        <UserContext.Provider value={{ userLoggedIn, setUserLoggedIn }}>
            {children}
        </UserContext.Provider>
    )
}