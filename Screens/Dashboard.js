import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Pressable,
  Alert,
  Text,
  View,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect } from "react";
import UserContext from "../Context/UserContext";
import AppLoader from "../Components/AppLoader";
import Card from "../Components/Card";
import Box from "../Components/Box";

function Dashboard() {
  const { currentUser } = useContext(UserContext);
  const { loginPending, setLoginPending } = useContext(UserContext);
  const categories = [
    "Tops",
    "Bottoms",
    "Shoes",
    "Head Wear",
    "Dresses",
    "Accessories",
  ];

  useEffect(() => {
    //handling effects
    setLoginPending(true);
    setTimeout(() => {
      setLoginPending(false);
    }, 3000);
  }, []);

  return (
    <>
       <View style={styles.container}>
        {/* <View style={styles.boxContainer}>
  
    <Box/>
    <Box/>
    <Box/>
    <Box/>
    <Box/>
    <Box/>

    
        
        </View> */}

          <View style={styles.boxContainer}>
          {categories.map((category, idx) =>{
      return(
        <Pressable
        key={idx}>
          <Box title="test"/>
        </Pressable>
      )
    })}
          </View>
       </View>

  
       
        {/* <ScrollView>
    {categories.map((category, idx) =>{
      return(
        <Pressable
        key={idx}>
          <Box title="test"/>
        </Pressable>
      )
    })}
    </ScrollView> */}
   
      {loginPending ? <AppLoader /> : null}
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "rgb(239,218,215)",
  
  },
  boxContainer: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 5
  },
});

export default Dashboard;
