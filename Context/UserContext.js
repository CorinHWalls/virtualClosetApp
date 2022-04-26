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

  const [selectedOutfitName, setSelectedOutfitName] = useState(null);

  //For image picker and Camera
  const [newImage, setNewImage] = useState(null);

  //For selecting Items for Lookbook
  const [isSelected, setIsSelected] = useState({});
  const [selecting, setSelecting] = useState(false);

  //Using on Dashboard & fav to refresh via useEffect
  const [counter, setCounter] = useState(0);

  const [isPressed, setIsPressed] = useState(false)

  //Item properties
  const[brand, setBrand] = useState();
  const [image, setImage] = useState();
  const [color, setColor] = useState();
  const [size, setSize] = useState();
  const [season, setSeason] = useState();
  const [category, setCategory] = useState();
  const [favorite, setFavorite] = useState();
  const [selected, setSelected] = useState();

  const [modalVisible, setModalVisable] = useState(false);


  return (
    <UserContext.Provider
      value={{
        isPressed,
        setIsPressed,
        selectedOutfitName, 
        setSelectedOutfitName,
        modalVisible,
        setModalVisable,
        brand,
        setBrand,
        image,
        setImage,
        color,
        setColor,
        size,
        setSize,
        season,
        setSeason,
        category,
        setCategory,
        favorite,
        setFavorite,
        selected,
        setSelected,
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
        setSelecting,
        counter,
        setCounter
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
