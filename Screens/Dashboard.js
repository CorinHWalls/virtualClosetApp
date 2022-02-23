import { StyleSheet, Dimensions, SafeAreaView, Pressable, Alert, Text, View } from "react-native";
import React, { useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import AppLoader from "../Components/AppLoader";

function Dashboard() {

    const {currentUser} = useContext(UserContext);
    const { loginPending, setLoginPending } = useContext(UserContext);
    const categories = ["Tops", "Bottoms", "Shoes", "Head Wear", "Dresses", "Accessories"];

    useEffect(() => {
      setLoginPending(true)
      console.log(currentUser[0].username)
      setTimeout(() => {
      setLoginPending(false);
      }, 3000)
    }, [])

  return (
      <>
    <Text>Dashboard</Text>
    <View>
       <Text> {currentUser[0].id} </Text> 
    </View>
    {loginPending ? <AppLoader /> : null}
    </>
  )
}

export default Dashboard