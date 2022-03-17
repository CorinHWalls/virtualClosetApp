import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  ///Purpose: To get userId based on who is logged in
  const [currentUser, setCurrentUser] = useState({
    Username: null,
    Id: null,
    FirstName: null,
    LastName: null,
  });
  ///Purpose: To slow down login process for splash screen
  const [loginPending, setLoginPending] = useState(false);

  ///Purpose: To display items based on category on the Dashboard
  const [selectedItemId, setSelectedItemId] = useState(null);

  const [newImage, setNewImage] = useState(null);

  const [isSelected, setIsSelected] = useState([]);
  const [selecting, setSelecting] = useState(false);

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loginPending,
        setLoginPending,
        selectedItemId,
        setSelectedItemId,
        newImage,
        setNewImage,
        isSelected,
        setIsSelected,
        selecting, 
        setSelecting
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
