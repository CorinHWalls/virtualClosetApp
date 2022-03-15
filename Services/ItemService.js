import UserContext from "../Context/UserContext";
import { useContext } from "react";




  //Used on Dashboard
  const getCategoryItems = async (category, userId) => {
    const response = await fetch(
      `http://192.168.4.21:5172/Item/getitemsbycategory/${category}/${userId}`,
      {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      }
      );
      
      const data = await response.json();
      
      return data;
    };
    //Used on Dashboard
    const getAllItems = async (userId) => {
      const response = await fetch(
        `http://192.168.4.21:5172/Item/getitemsbyuserid/${userId}`,
        {
          method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  };
  
  //Used on ItemDetailsScreen
  const getItemById = async (id, userId) => {
    const response = await fetch(
      `http://192.168.4.21:5172/Item/getitembyid/${id}/${userId}`,
      {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data[0];
  };
  
  const updateItemById = async ({currentUserId, selectedItemId, color, size, brand, season, category, favorite, image}) => {
  
    const response = await fetch("http://192.168.4.21:5172/Item/updateitembyid", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        
        userId: currentUserId,
        Id: selectedItemId,
        Color: color,
        Size: size,
        Brand: brand,
        Season: season,
        Category: category,
        Image: image,
        Favorite: favorite,
      }),
    });
  
    const data = await response.json();
    return data;
  };
  const addItem = async (currentUserId, color, size, brand, season, category, image, favorite) => {
   
  
    const response = await fetch("http://192.168.4.21:5172/Item/additem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: currentUserId,
        Color: color,
        Size: size,
        Brand: brand,
        Season: season,
        Category: category,
        Image: image,
        Favorite: favorite
      }),
    });
  
    const data = await response.json();
    return data;
  };

  const getFavorites = async (userId, favorite) => {
    const response = await fetch(
      `http://192.168.4.21:5172/Item/getfavorites/${userId}/${favorite}`,
      {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  };






export { getCategoryItems, getAllItems, getItemById, updateItemById, addItem, getFavorites };
