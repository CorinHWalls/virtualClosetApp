import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({children}) => {

    ///Purpose: To get userId based on who is logged in
        const [currentUser, setCurrentUser] = useState({
            Username: null,
            Id: null,
            FirstName: null,
            LastName: null
        });
    ///Purpose: To slow down login process for splash screen
        const [loginPending, setLoginPending] = useState(false);

    ///Purpose: To display items based on category on the Dashboard    
        const [category, setCategory] = useState(null)

        return(
            <UserContext.Provider value={{
                currentUser, setCurrentUser, loginPending, setLoginPending, category, setCategory
                }}>
                {children}
            </UserContext.Provider>
        )
}

export default UserContext;
