import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Pressable,
  Alert,
  Text,
  View,
  ScrollView,
  FlatList
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";
import AppLoader from "../Components/AppLoader";
import Card from "../Components/Card";
import Box from "../Components/Box";
import getCategoryItems from "../Services/ItemService";

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

  const [category, setCategory] = useState(null)

  useEffect( async () => {

    // setCategory(await getCategoryItems("Top", currentUser));
    //handling effects
    setLoginPending(true);
    setTimeout(() => {
      setLoginPending(false);
    }, 3000);
  }, []);
  // console.log(category);

  return (
    <>
      <SafeAreaView style={styles.container}>

        {/* <ScrollView horizontal={true}>
      <View>
        
      </View>
        </ScrollView> */}
        <FlatList>

        </FlatList>

      </SafeAreaView>

  
       
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
    paddingTop: 50
   
  
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
