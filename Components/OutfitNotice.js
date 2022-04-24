import { Text, StyleSheet } from 'react-native'
import React, { useContext, useState, useEffect } from "react";
import UserContext from "../Context/UserContext";
import { getOutfitByName } from '../Services/OutfitService';

export default function OutfitNotice({outfitName}) {

    const { currentUser } = useContext(UserContext);
    const currentUserId = currentUser[0].id;
    const [result, setResult] = useState();

   useEffect( async () => {

       let arr = [];
       arr = await getOutfitByName(currentUserId, outfitName)
       let length = arr.length
       setResult(length)

   }, [])

      
  return (
  <Text style={styles.text}>
     {result}
  </Text>
  )
}

const styles = StyleSheet.create({
    text:{
        backgroundColor: "#ee4d2d",
        color: "#fff",
        borderRadius: 8,
        paddingVertical: 3,
        paddingHorizontal: 5,
        fontSize: 10,
    }
})