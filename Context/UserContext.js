import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {

        const [currentUser, setCurrentUser] = useState({
            Username: null,
            Id: null,
            FirstName: null,
            LastName: null
        });
        const [loginPending, setLoginPending] = useState(false);

        return(
            <UserContext.Provider value={{
                currentUser, setCurrentUser, loginPending, setLoginPending
                }}>
                {children}
            </UserContext.Provider>
        )
}

export default UserContext;
