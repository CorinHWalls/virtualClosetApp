import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";
import LookBookActionBtn from "../Components/LookBookActionBtn";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "../Context/UserContext";




export default function LookbookScreen() {

  const { currentUser, setSelectedItemId, loginPending, setLoginPending } =
  useContext(UserContext);
  const currentUserId = currentUser[0].id;
  const [outfits, setOutfits] = useState()

  useEffect(async () => {
 //Get all Outfits by userId
    
  
  }, []);

  
  return (
   <>
   <SafeAreaView style={styles.container}>
     {/* Start of main container */}

     <View style={styles.itemContainer}>
          <FlatList
            // style={{flex:1}}
            horizontal={false}
            numColumns={2}
            data={outfits}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => {
             
              return (
                <>
                
                <TouchableOpacity
                  onPress={() => {
                    handleDetailClick(), setSelectedItemId(item.id);
                  }}
                  style={styles.itemBox}
                >
                  <View key={index}>

                    <Text>id: {item.id}</Text>
                    <Text>UserId: {item.userId}</Text>
                    <Text>{item.category}</Text>
                    <Text>{item.color}</Text>
                    <Text>Size: {item.size}</Text>
                    <Text>{item.season}</Text>
                    <Text>Brand: {item.brand}</Text>
                    <Image source={{uri: item.image}} styles={styles.imageContainer} alt="image" />
                  </View>
                    
                </TouchableOpacity>
                </>
              );
            }}
          />
          

          <LookBookActionBtn />
         
        </View>
   </SafeAreaView>
   </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(239,218,215)",
    // paddingTop: 50,
  },
  itemContainer: {
    flex: 50,
    height: Dimensions.get("window").height * 2,
    // flexDirection: "column",
    // flexWrap: "wrap",
    padding: 5,
    marginBottom: "23%",
    borderColor: "black",
  },
  itemBox: {
    width: "48%",
    height: 150,
    alignItems: "center",
    marginHorizontal: "1%",
    borderWidth: 0.75,
    marginBottom: 5,
    backgroundColor: "white",
  },
  scrollSection: {
    margin: 10,
    height: 60,
    marginTop: 10,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderWidth: 0.2,
    borderColor: "black",
    borderRadius: 5,
    paddingTop: 15,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
  imageContainer: {
    height: 150,
    width: 150
    
  }
});