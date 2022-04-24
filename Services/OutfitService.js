import {URL} from "../Components/Url"
// const addOutfit = async (
//   currentUserId,
//   itemId,
//   outfitName,
//   outfitOccasion,
//   outfitSeason
// ) => {
//   const response = await fetch(
//     "https://virtualclosetapi.azurewebsites.net/Outfit/AddOutfit",
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         userId: currentUserId,
//         ItemId: itemId,
//         OufitName: outfitName,
//         OutfitOccasion: outfitOccasion,
//         OutfitSeason: outfitSeason,
//       }),
//     }
//   );

//   const data = await response.json();
//   return data;
// };

const addOutfit = async (
  {
  userId,
  itemId,
  outfitName,
  brand,
  category,
  color,
  favorite,
  image,
  season,
  selected,
  size,
  }

) => {
  const response = await fetch(
    `${URL}/Outfit/addoutfit`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        id: 0,
        userId: userId,
        itemId: itemId,
        outfitName: outfitName,
        color: color,
        favorite: favorite,
        image: image,
        size: size,
        season: season,
        selected: selected,
        brand: brand,
        category: category,
        
      }),
    }
  );

  const data = await response.json();
  return data;
};

// const getOutfitByUserId = async (userId) => {
//   const response = await fetch(
//     `https://virtualclosetapi.azurewebsites.net/getoutfitbyuserid/${userId}`,
//     {
//       method: "Get",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
//   const data = await response.json();
//   return data[0];
// };
const getOutfitByUserId = async (userId) => {
  const response = await fetch(
    `${URL}/outfit/getoutfitbyuserid/${userId}`,
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

const getOutfitByName = async (userId, outfitName) => {
  const response = await fetch(
    `${URL}/outfit/getoutfits/${userId}/${outfitName}`,
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

export { addOutfit, getOutfitByUserId, getOutfitByName };
