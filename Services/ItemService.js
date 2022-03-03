//Used on Dashboard
const getCategoryItems = async (category, userId) => {

    const response = await fetch(`http://192.168.4.21:5172/Item/getitemsbycategory/${category}/${userId}`, { 
        method: "Get",
        headers: {
             "Content-Type" : "application/json"
        }
    })

    const data = await response.json();
   
    return data;
    
  }
//Used on Dashboard
  const getAllItems = async (userId) => {
      const response = await fetch(`http://192.168.4.21:5172/Item/getitemsbyuserid/${userId}`, {
        method: "Get",
        headers: {
             "Content-Type" : "application/json"
        }
  })
  const data = await response.json();
  return data;
}

//Used on ItemDetailsScreen
const getItemById = async (id, userId) => {
  const response = await fetch(`http://192.168.4.21:5172/Item/getitembyid/${id}/${userId}`, {
    method: "Get",
    headers: {
         "Content-Type" : "application/json"
    }
})
const data = await response.json();
return data[0];
}


  export {getCategoryItems, getAllItems, getItemById}

  