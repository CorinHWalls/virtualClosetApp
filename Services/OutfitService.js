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
  currentUserId,
  itemId,
  outfitName,
  outfitOccasion,
  outfitSeason
) => {
  const response = await fetch(
    "http://192.168.4.21:5172/Outfit/AddOutfit",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: currentUserId,
        ItemId: itemId,
        OufitName: outfitName,
        OutfitOccasion: outfitOccasion,
        OutfitSeason: outfitSeason,
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
    `http://192.168.4.21:5172/getoutfitbyuserid/${userId}`,
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

export { addOutfit, getOutfitByUserId };
